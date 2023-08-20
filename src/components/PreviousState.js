import { useState } from "react";

function PreviousState(){
    const [age, setAge] = useState(24)

    function handleIncrement(){
        setAge((age)=>age+1)
    }
    return(
        <>
            <h1>Your age: {age}</h1>
            <button onClick={()=>{
                handleIncrement();
                handleIncrement();
                handleIncrement();
            }}>+3</button><br/><br/>
            <button onClick={handleIncrement}>+1</button>
        </>
    )
}


export default PreviousState;