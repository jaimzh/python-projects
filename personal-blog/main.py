from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.middleware.sessions import SessionMiddleware
import os
from routes import router

app = FastAPI(title="Personal Blog")

# Add session middleware for authentication and signing cookies
app.add_middleware(SessionMiddleware, secret_key=os.urandom(32))

# Mount static files specifcally style.css
app.mount("/static", StaticFiles(directory="static"), name="static")

# Include all app routes
app.include_router(router)
