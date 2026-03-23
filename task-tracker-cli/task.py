
from datetime import date
import json


class Task:
    def __init__(self, task_id, description, updated_at = None): 
        self.id = task_id
        self.desc = description
        self.status = "Todo"
        self.created_at = self.get_today_date()
        if updated_at: self.updated_at = updated_at 
    
    def get_json_obj(self):    
        return json.dumps(self.__dict__, indent=4)
      
    @classmethod
    def get_today_date(cls):
        today = date.today()
        date_string = today.isoformat()
        return date_string
