# Personal Blog

## Project Overview
Python sample solution for the Personal Blog challenge from roadmap.sh.

This project is a simple FastAPI-based personal blog that allows users to view, create, edit, and delete blog posts. The application uses a local JSON file for data storage. It also includes session-based authentication to secure the admin dashboard from unauthorized access.

## Screenshots
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)

## Features
- **Admin Dashboard**: Create, edit, and delete blog articles.
- **Authentication**: Verifies user credentials to access the admin dashboard using session cookies.
- **JSON Storage**: Saves all articles to a local `articles.json` file.
- **Minimalist UI**: Simple black and white design using custom CSS.

## Technologies Used
- **FastAPI**: Python web framework for building the backend.
- **Jinja2**: Templating engine for rendering HTML pages.
- **Vanilla CSS**: Used for styling the frontend.
- **Uvicorn**: ASGI web server for running the application.

## Server-Side Rendering
Unlike single-page applications (like React or Vue), this project leverages **Server-Side Rendering (SSR)**. The FastAPI backend tightly integrates with Jinja2 to dynamically generate fully populated HTML documents on the server and send them directly to the client. This approach ensures excellent SEO, faster initial page loads, and simplified client-side asset management.

### Server Routing Paths
The application serves complete HTML payloads for the following paths:

- `GET /` - Renders the **home page** (`home.html`) listing all articles.
- `GET /article/{id}` - Renders a **single article view** (`article.html`).
- `GET /login` - Renders the **admin login portal** (`login.html`).
- `POST /login` - Validates credentials and initializes the secure session.
- `GET /dashboard` - Renders the **admin control panel** (`dashboard.html`) to manage articles.
- `GET /admin/article/new` - Renders the **create article form** (`add_article.html`).
- `GET /admin/article/{id}/edit` - Renders the **edit article form** (`edit_article.html`).
- `POST /admin/article/...` - Endpoints for handling form submissions (create, edit, delete).

## Project Structure
```text
personal-blog/
├── content/
│   └── articles.json   # Local JSON storage for articles
├── static/
│   └── style.css       # Custom minimalist styles
├── templates/          # Jinja2 HTML templates
│   ├── base.html
│   ├── home.html
│   └── ...
├── auth.py             # User authentication and password verification
├── main.py             # FastAPI application and middleware setup
├── models.py           # Pydantic data models
├── routes.py           # Application routing endpoints
├── utils.py            # Helper functions for data serialization
└── requirements.txt    # Python dependencies
```

## Installation

### Prerequisites
- Python 3.8+

### Steps
Navigate to the project directory:
```bash
cd personal-blog
```

Set Up Virtual Environment:
```bash
python -m venv venv
venv\Scripts\activate  # On Windows
# source venv/bin/activate  # On macOS/Linux
```

Install Dependencies:
```bash
pip install -r requirements.txt
```

Run the FastAPI App:
```bash
uvicorn main:app --reload
```

Test the Application:
Open your browser and navigate to:
`http://localhost:8000`

Admin Login:
Navigate to `http://localhost:8000/login` to access the admin dashboard. 

## Authentication
The application uses session-based authentication. If a user is not logged in, they will be redirected to the login page when trying to access the dashboard or add/edit articles.

## Data Storage & Format
The blog uses a simple `content/articles.json` file to store all articles. If the file does not exist, it will be automatically created when the first article is published.

**Storage Format Example (`articles.json`)**:
```json
[
    {
        "id": "12345-abcde",
        "title": "My First Post",
        "content": "This is the content of the blog post.",
        "author": "Admin",
        "created_at": "2026-03-24T10:00:00.000000",
        "updated_at": "2026-03-24T10:00:00.000000"
    }
]
```
