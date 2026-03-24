from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, RedirectResponse
from starlette.middleware.sessions import SessionMiddleware
from utils import (
    get_all_articles,
    get_article_by_id,
    create_article,
    update_article,
    delete_article,
)
from auth import verify_credentials, is_authenticated
import models
import os

app = FastAPI(title="Personal Blog")

# Add session middleware for authentication
app.add_middleware(SessionMiddleware, secret_key=os.urandom(32))

# Tell fastapi where my jinja templates are and where my static files are
templates = Jinja2Templates(
    directory="templates", context_processors=[lambda request: {"request": request}]
)

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    articles = get_all_articles()
    return templates.TemplateResponse(
        request=request, name="home.html", context={"articles": articles}
    )


@app.get("/article/{article_id}", response_class=HTMLResponse)
async def read_article(request: Request, article_id: str):
    article = get_article_by_id(article_id)
    if not article:
        return RedirectResponse(url="/")
    return templates.TemplateResponse(
        request=request, name="article.html", context={"article": article}
    )


# AUTH ROUTES


@app.get("/login", response_class=HTMLResponse)
async def login_page(request: Request, error: str = None):
    if is_authenticated(request):
        return RedirectResponse(url="/dashboard")
    return templates.TemplateResponse(
        request=request, name="login.html", context={"error": error}
    )


@app.post("/login", response_class=HTMLResponse)
async def login_submit(
    request: Request, username: str = Form(...), password: str = Form(...)
):
    if verify_credentials(username, password):
        request.session["authenticated"] = True
        return RedirectResponse(url="/dashboard", status_code=303)
    return templates.TemplateResponse(
        request=request,
        name="login.html",
        context={"error": "Invalid username or password"},
    )


@app.get("/logout", response_class=HTMLResponse)
async def logout(request: Request):
    request.session.clear()
    return RedirectResponse(url="/", status_code=303)


# DASHBOARD ROUTES


@app.get("/dashboard", response_class=HTMLResponse)
async def dashboard(request: Request):
    if not is_authenticated(request):
        return RedirectResponse(url="/login")
    articles = get_all_articles()
    return templates.TemplateResponse(
        request=request, name="dashboard.html", context={"articles": articles}
    )


@app.post("/admin/article/{article_id}/delete")
async def delete_article_route(request: Request, article_id: str):
    if not is_authenticated(request):
        return RedirectResponse(url="/login")
    delete_article(article_id)
    return RedirectResponse(url="/dashboard", status_code=303)


# ADD ARTICLE ROUTES


@app.get("/admin/article/new", response_class=HTMLResponse)
async def add_article_page(request: Request):
    if not is_authenticated(request):
        return RedirectResponse(url="/login")
    return templates.TemplateResponse(
        request=request, name="add_article.html", context={}
    )


@app.post("/admin/article/new", response_class=HTMLResponse)
async def add_article_submit(
    request: Request,
    article_id: str = Form(...),
    title: str = Form(...),
    content: str = Form(...),
    author: str = Form(...),
):
    if not is_authenticated(request):
        return RedirectResponse(url="/login")

    from datetime import datetime
    from models import Article

    now = datetime.now()
    article = Article(
        id=article_id,
        title=title,
        content=content,
        author=author,
        created_at=now,
        updated_at=now,
    )
    create_article(article)
    return RedirectResponse(url="/dashboard", status_code=303)


# EDIT ARTICLE ROUTES


@app.get("/admin/article/{article_id}/edit", response_class=HTMLResponse)
async def edit_article_page(request: Request, article_id: str):
    if not is_authenticated(request):
        return RedirectResponse(url="/login")
    article = get_article_by_id(article_id)
    if not article:
        return RedirectResponse(url="/dashboard")
    return templates.TemplateResponse(
        request=request, name="edit_article.html", context={"article": article}
    )


@app.post("/admin/article/{article_id}/edit")
async def edit_article_submit(
    request: Request,
    article_id: str,
    title: str = Form(...),
    content: str = Form(...),
    author: str = Form(...),
):
    if not is_authenticated(request):
        return RedirectResponse(url="/login")

    from datetime import datetime
    from models import Article

    article = get_article_by_id(article_id)
    if not article:
        return RedirectResponse(url="/dashboard")

    updated_article = Article(
        id=article_id,
        title=title,
        content=content,
        author=author,
        created_at=article.created_at,
        updated_at=datetime.now(),
    )
    update_article(article_id, updated_article)
    return RedirectResponse(url="/dashboard", status_code=303)
