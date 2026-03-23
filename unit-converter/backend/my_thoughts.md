So i am writing this after i am done with the whole thing that is the api 

So here's the thing

first we 

1. make the model schema 
2. then the logic using the model into consideration 
3. Routes definition


## 1. MODEL SCHEMA 
We use basemodel form pydantic to defint the interface or the schema of the request and resposnse and dwe use the data types

- req -> value, from unit, to unit 
- res -> result 

## 2. LOGIC 
So for the logic we simply created a python file that houses all the functions for converting, note how it takes value, from unit, to unit so we pretty much just accepted what was defined in the schema as parameters 

## 3. API ROUTES
- initialized the fastAPI
- created the routes
so for the routes you have to pass the response model which is from  the **model schema ** we defined earlier, once that is done we can optionally pass responses= which is just as simple as status code descriptions 
 
 so we made a function 
 wrap a try excep 
 in try it returns the result from the function in **logic**
 we then return it as a json/dict 

 the except we raise HTTPException which is first imported from fast api, specify status code and detail 


 And that is about it 
    
