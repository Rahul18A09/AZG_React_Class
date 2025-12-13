import { useEffect, useState } from "react"


function Count(){

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Mounted");

        return ()=>{
            console.log("Unmounted");
            
        };
        
    },[]);

    useEffect(()=>{
        console.log("Updated: count", count );
        
    }, [count]);

    return(
        <div>
            <h1>Count:{count}</h1>
           <button onClick={()=> setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default Count