from fastapi import Request, HTTPException, status
from fastapi.responses import RedirectResponse
from starlette.middleware.sessions import SessionMiddleware

ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "password123"

def verify_credentials(username: str, password: str) -> bool: 
    return username == ADMIN_USERNAME and password == ADMIN_PASSWORD

def is_authenticated(request:Request) -> bool: 
    return request.session.get("authenticated", False)

def require_auth(request: Request): 
    if not is_authenticated(request):
        raise HTTPException(
            status_code=status.HTTP_307_TEMPORARY_REDIRECT,
            headers={"Location": "/login"},
        )