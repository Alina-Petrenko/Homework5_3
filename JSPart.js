console.log("First Part JS Homework")
function counter (value) 
    {
        let newValue = value;
        counter = function() 
        {     
            let arg;      
            if (arguments.length > 0)
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

function getUpdatedArr() 
    {    
        let arg = []; 
        return getUpdatedArr = function() 
            {   
              if (arguments.length > 0)
              {
                for (let i of arguments)      
                {
                        arg.push(i)
                        return arg;  
                }   
              }
              else
              {
                arg = [];
                return arg;
              } 
                
            };
    }
    let a = getUpdatedArr();
         
    console.log(a(3));
    console.log(a(5));
    console.log(a(6));
    console.log(a());
    console.log(a(2));

