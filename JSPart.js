console.log("First Part JS Homework")
function counter (value) 
    {
        let newValue = value;
        counter = function() 
        {     
            let arg;      
            if (arguments[0])
                {
                    arg = arguments[0];
                    return newValue = newValue + arg;
                }
            else
                {
                    return newValue = newValue + 0;
                }
        };
        return counter();
    }
    console.log(counter(1));
    console.log(counter(2)); 
    console.log(counter(7));
    console.log(counter(10));  

console.log("Second Part JS Homework")

function getUpdatedArr(value) 
    {     
  
        let i = 0;
        let arg = [];
        getUpdatedArr = function() 
            { 
                if (value)
                {    
                    arg[i] = value;
                    i++;            
                    return arg; 
                }
                else
                {
                  return arg = [];
                }                
            };
        return getUpdatedArr();
    }
         
    console.log(getUpdatedArr(3));
    console.log(getUpdatedArr(5));
    console.log(getUpdatedArr(6));
    console.log(getUpdatedArr());
    console.log(getUpdatedArr(2));

