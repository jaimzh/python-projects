from pydantic import BaseModel
from datetime import datetime
from typing import Optional 



class Article(BaseModel): 
    id: str
    title: str
    content: str
    author: str
    created_at: datetime
    updated_at: datetime

    