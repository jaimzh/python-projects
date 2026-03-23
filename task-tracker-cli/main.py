import sys 
import api


def main():
    
    #note you could make this an interactive input cli, so we use the input() instead of sys arg 
    
    match len(sys.argv):
        
        case 2:
            api.process_request( command=sys.argv[1])
        
        case 3: 
            api.process_request(command=sys.argv[1], arg1= sys.argv[2])
        
        case 4: 
            api.process_request(command=sys.argv[1], arg1= sys.argv[2], arg2=sys.argv[3])
            
        

if __name__ == "__main__": 
    main()



