import { useState } from "react";

function TextField(){
    const [text, setText] = useState('hello')

    function handleChange(e){
        setText(e.target.value)
    }


    return(
        <>
            <input value={text} onChange={handleChange}/>
            <p>You typed: {text}</p>
            <button onClick={()=>setText('hello')}>Reset</button>
        </>
    )
}


export default TextField;