
#to meter 
LENGTH_CONVERSION = {
    "millimeter": 0.001,
    "centimeter": 0.01,
    "meter": 1,
    "kilometer": 1000,
    "inch": 0.0254,
    "foot": 0.3048,
    "yard": 0.9144,
    "mile": 1609.34,
}

#to kg
WEIGHTS_CONVERSION = {
    "milligram": 0.000001,
    "gram": 0.001,
    "kilogram": 1,
    "ounce": 0.0283495,
    "pound": 0.453592,
}



def convert_temperature(value, from_unit, to_unit): 
    # Stage 1: Convert input to Celsius
    if from_unit == "celsius":
        c = value
    elif from_unit == "fahrenheit":
        c = (value - 32) * 5 / 9 
    elif from_unit == "kelvin": 
        c = value - 273.15
    else:
        raise ValueError("Unknown from_unit")

    # Stage 2: Convert Celsius to the target unit
    if to_unit == "celsius": 
        return c 
    elif to_unit == "fahrenheit": 
        return c * 9 / 5 + 32
    elif to_unit == "kelvin":    
        return c + 273.15
    else: 
        raise ValueError("Unknown to_unit")
    
    

def convert_length(value, from_unit, to_unit ):
    if from_unit not in LENGTH_CONVERSION or to_unit not in LENGTH_CONVERSION:
        raise ValueError("Invalid length unit")
    # converting to meters e.g 5 foot to inch soooo first convert 5 foot to meters
    meters = value * LENGTH_CONVERSION[from_unit]
    # divide meters by tounit meter equivalent... through cross mutliply if 1524meters = xinches and 1inch - 0.0254 what is x inches 
    return  meters / LENGTH_CONVERSION[to_unit]
    
    
    
def convert_weight(value, from_unit, to_unit ):
    if from_unit not in WEIGHTS_CONVERSION or to_unit not in WEIGHTS_CONVERSION:
        raise ValueError("Invalid weight unit")
    meters = value * WEIGHTS_CONVERSION[from_unit]
    return  meters / WEIGHTS_CONVERSION[to_unit]
    
    
    
    
    
    
    