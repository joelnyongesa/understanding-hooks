import { useState } from "react";


function Counter(){
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount((count) => count+1)
    }
    return(
        <button onClick={handleClick}>I have been clicked {count} times!</button>
    )
}


export default Counter;