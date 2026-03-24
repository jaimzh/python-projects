alrlight so for this project i will build a personal blog that renders all itj's content from the server 

so essentially we render html i


so we need to build 
- Guest Section: Homepage article list and each individual article just read only 
- Admin section- Dashboard where  you can see all the articles , have the ability to add, edit, delete articles reqiures authentication

- fastapi - web framework
- uvicorn - ASGI server
- jinja2 - templating
- python-jose - JWT tokens
- passlib - password hashing

pip install fastapi uvicorn jinja2 python-jose passlib


alright so we have the project structure 
(Folders)
- templates: this will have our html 
- static: this will have our css and js if necessary 
- content: this will have our articles in json format

(Files)
- main.py: this will be our main fastapi application
- auth.py: this will handle our authentication
- models.py: this will have our pydantic models for the articles
- utils.py: this will have utitlity functions specifically the crud operations for the articles, crud functions that will be used to modify the articles in the json file 
- requirements.txt: this will have our dependencies
- .env: this will have our environment variables
- .gitignore: this will have our gitignore file


