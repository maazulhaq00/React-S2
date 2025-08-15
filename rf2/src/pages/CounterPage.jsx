import { useState } from "react";

function CounterPage() {

    let [counter, setCounter] = useState(0)


    function inc(){
        setCounter(
            (preCount) => {
                return preCount+1
            }
        )
    }    
    function dec(){
        setCounter(
            (preCount) => {
                return preCount-1
            }
        )
    }



    return ( 
        <>
        <h3>Count : {counter} </h3>
       
       <button onClick={inc} >Increment</button>
       
       <button onClick={dec} >Decrement</button>
        </>
     );
}

export default CounterPage;