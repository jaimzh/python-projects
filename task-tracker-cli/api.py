

import json
import sys
import os
from datetime import date
from task import Task


#alright so using filename works yeah? but let's be a lil smarter about this
curr_dir = os.path.dirname(os.path.abspath(__file__)) #this will get or return the current folder we are in, os path. absoult path is assing python to check from it's well main directory like from the c:
file_json = "tasks.json"
filename = os.path.join(curr_dir, file_json)


def load_json(filename): 
    with open(filename, "r",  ) as file:
        json_file = json.load(file)
    return json_file

def write_json(filename, data):
    with open(filename,   "w", ) as file:
        json.dump(data, file,  indent=4, )
    print("written successfully")



# list all 
def get_all_tasks():
    content = load_json(filename)
    tasks = content["tasks"]
    return tasks


#list inprogress

def get_in_progress():
    tasks = get_all_tasks()
    filtered_list = []
    for task in tasks: 
        if task["status"] == "In-Progress": 
            filtered_list.append(task)
        
    return filtered_list

#list todo
def get_todo():
    tasks = get_all_tasks()
    filtered_list = []
    for task in tasks: 
        if task["status"] == "Todo": 
            filtered_list.append(task)
        
    return filtered_list

#list done 
def get_done():
    tasks = get_all_tasks()
    filtered_list = []
    for task in tasks: 
        if task["status"] == "Done": 
            filtered_list.append(task)
        
    return filtered_list
    

def get_task_by_id(task_id): 
    tasklist = get_all_tasks()  
    try:
        return tasklist[task_id]
    except Exception: 
        return "Task not found"
    
  
        
# add "Buy groceries"
def add_to_task_list( description):
    task_list  = get_all_tasks()
    task = Task(
        task_id = len(get_all_tasks()), 
        description= description, 
    )
    json_formatted_task = json.loads(task.get_json_obj())
    task_list.append(json_formatted_task)
    
    full_json = {
        "tasks": task_list
    }
    
    write_json(filename, full_json)
    
    return "added"

# helper function to get today's date
def get_today_date():
        today = date.today()
        date_string = today.isoformat()
        return date_string


# update 1 "Buy groceries and cook dinner"  

def update_task_desc(index, description): 
    
    index = int(index)
    filtered_task = get_task_by_id(index) 
    filtered_task["desc"] = description 
    filtered_task["updated_at"] = get_today_date()
    old_list = get_all_tasks() 
    
    old_list[index] = filtered_task
    
    new_list = old_list
    
    full_json = {
        "tasks": new_list
    }
    
    write_json(filename, full_json)
    
    return "updated description"



# delete 1 with automatic looping 
def delete_task(index: int):

    old_list = get_all_tasks()  
    old_list.pop(index) 
    
    #perform an automatic count update not necessary but cool 
    for i, task in enumerate(old_list[index:]): # from curr index to the end, start of i is 0, 
        task["id"]  = index  + i # start + 0 
    
    full_json = {
        "tasks": old_list
    }
    
    # print(full_json)
    write_json(filename, full_json)
    return "deleted"
    

# Marking a task as in progress or done
def update_task_status(index, status): 
    allowed_statuses = ["in-progress", "done"]
    if status.lower() not in allowed_statuses: 
        return "Invalid status. Use 'in-progress' or 'done'."
    
    index = int(index)
    filtered_task = get_task_by_id(index) 
    filtered_task["status"] = status.title() 
    old_list = get_all_tasks() 
    
    old_list[index] = filtered_task
    
    new_list = old_list
    
    full_json = {
        "tasks": new_list
    }
    
    write_json(filename, full_json)
    
    return "updated"

    
    
#printing those lil checkbox thingies [x]  
def render_status(status): 
    if status == "Done": 
        return "[x]"
    if status == "Todo":
        return "[ ]"
    if status == "In-Progress": 
        return "In-Progress"
    
#printing to the console 
def render_response(response):
    if response == "help":
        print("Commands: add, delete, list, quit")
        return ""
    if isinstance(response, str):
        return response

    elif isinstance(response, list): 
        print("\n#     To Do List     #")
        print("----------------------\n")
        if not response:
            print("  (No tasks found)  ")
        for task in response:
            status_icon =  render_status(task["status"])
            print(f"{task['id']}: {status_icon} {task["desc"]}")
        print("----------------------\n")
            
        return ""
    


def process_request(command, arg1=None, arg2=None):
    
    match command:
        case "add":
            result = add_to_task_list(arg1)       
        case "update":
            result = update_task_desc(index=arg1, description=arg2)     
        case "delete":
            result = delete_task(index=int(arg1)) 
        case "mark":
            result = update_task_status(index=arg1, status=arg2)     
        case "list":
            if not arg1:
                result = get_all_tasks()         
            elif arg1 == "todo":      
                result = get_todo()
            elif arg1 == "done":
                result = get_done()    
            elif arg1 == "in-progress":
                result = get_in_progress()
            
        case "help": 
            result = "help"
            
            
    render_response(result)        
            
            
    


