import { useState } from "react";

function TwoVariables(){
    const [name, setName] = useState('Joel')
    const [age, setAge] = useState(24)

    function handleName(e){
        setName(e.target.value)
    }

    function handleAge(){
        setAge((age)=>(age+1))
    }


    return(
        <>
            <input value={name} onChange={handleName}/> <br/> <br/>
            <button onClick={handleAge}>Increment age</button>
            <p>Hello, {name}. You are {age} years old.</p>
        </>
    )
}


export default TwoVariables;