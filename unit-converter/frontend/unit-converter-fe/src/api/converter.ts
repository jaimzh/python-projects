
// alright so i have to identify what port the be is running on which is most likely 8000

//what endpoint will handle converstions so in my cast it is just a post/convert and all that 



import axios from "axios" 


//base url from the be port
const api = axios.create({
  baseURL: 'http://localhost:8000',
});


// think of it like schema to match the be request body LITERALLY THE FASTAPI BASE MODEL
export interface ConversionRequest {
    value: number;
    from_unit: string;
    to_unit: string;
    
}

//response type, which seems kind of useless i mean what else would it return...errors i guess
export interface ConversionResponse {
    result: number
}


// the main async functions that actually hit the be endopoint 

export async function convertLength(data: ConversionRequest): Promise<ConversionResponse> { 
    const response = await api.post("/convert/length", data)
    return response.data
}


export async function convertWeight(data: ConversionRequest): Promise<ConversionResponse> {
  const response = await api.post('/convert/weight', data);
  return response.data;
}

export async function convertTemperature(data: ConversionRequest): Promise<ConversionResponse> {
  const response = await api.post('/convert/temperature', data);
  return response.data;
}
