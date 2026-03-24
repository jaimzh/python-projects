import json 
import os 
from pathlib import Path
from typing import List, Optional
from models import Article


CONTENT_DIR = Path("content")

CONTENT_DIR.mkdir(exist_ok=True)

ARTICLE_FILE = CONTENT_DIR / "articles.json"


# when working with json you LOAD & SAVE helper, load json and save to json 
def _load_articles() -> List[dict]:
    if not ARTICLE_FILE.exists():
        return []
    with open(ARTICLE_FILE, 'r') as f:
        return json.load(f)

def _save_articles(articles: List[Article]):
    data = [article.model_dump(mode='json') for article in articles]
    with open(ARTICLE_FILE, "w") as f: 
        json.dump(data, f, indent=4)




def get_all_articles()-> List[Article]:
    # articles = []
    data = _load_articles()
    # for article_dict in data: 
    #      article = Article(
    #         id=article_dict['id'],
    #         title=article_dict['title'],
    #         content=article_dict['content'],
    #         author=article_dict['author'],
    #         created_at=article_dict['created_at'],
    #         updated_at=article_dict['updated_at']
    #     )
        # return articles
        # or 
        
    return[Article(**article) for article in data ]
     
    



def get_article_by_id(article_id: str) -> Optional[Article]:
    articles = get_all_articles()
    
    for article in articles: 
        if article.id == article_id:
            return article
    return None


def create_article(article: Article):
    articles = get_all_articles()
    articles.append(article)
    _save_articles(articles)


def update_article(article_id: str, updated_article: Article):
    articles = get_all_articles()
    for i, article in enumerate(articles):
        if article.id == article_id: 
            articles[i] = updated_article
            _save_articles(articles)
            return updated_article
    return None


def delete_article(article_id: str):
    articles = get_all_articles()
    # for i, article in enumerate(articles):
    #     if article.id == article_id: 
    #         articles.pop(i)
    #         _save_articles(articles)
    #         return True
    # return False
    #or
    articles = [article for article in articles if article.id != article_id]
    _save_articles(articles)
    return True
