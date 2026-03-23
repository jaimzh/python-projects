from fastapi import FastAPI, HTTPException
from models import ConversionRequest, ConversionResponse
import converter 

app = FastAPI()

#CONSTANT
status_code_desc = {
        400: {"description": "Invalid unit provided or calculation error"},
        422: {"description": "Validation Error (e.g. sending a string instead of a number)"}
    }


@app.get("/")
def read_root():
    return {"status": "Converter API is online"}



@app.post("/convert/length", response_model=ConversionResponse, responses=status_code_desc)
def convert_len(data: ConversionRequest):
    try:
        res = converter.convert_length(value=data.value, from_unit=data.from_unit.lower(), to_unit=data.to_unit.lower())
        return {"result": res}
    except ValueError as e:
        raise HTTPException(status_code=400,  detail=str(e))
        
        
        
        
@app.post("/convert/weight", response_model=ConversionResponse, responses=status_code_desc)
def convert_weight(data: ConversionRequest):
    try:
        # do sommethign 
        res = converter.convert_weight(value=data.value, from_unit=data.from_unit.lower(), to_unit= data.to_unit.lower())
        return {"result": res}
    except ValueError as e: 
        raise HTTPException(status_code= 400, detail=str(e))
    
    
@app.post("/convert/temperature", response_model=ConversionResponse, responses=status_code_desc)
def convert_temp(data: ConversionRequest):
    try:
        res = converter.convert_temperature(data.value, data.from_unit.lower(), data.to_unit.lower())
        return {"result": res}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))