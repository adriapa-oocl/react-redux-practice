import React, { useState } from 'react'
import "../styles/TodoForm.css"

function TodoForm() {

    const [inputText, setText] = useState("");

    function handleInputTextChange(event){
        setText(event.target.value);
        console.log(event.target.value);
    }

    function handleInputTextAdd(){
        console.log("input text to be added: ", inputText);
    }

    return (
        <div className = "TodoForm">
            <input
                type = "text"
                placeholder = "input a new todo item"
                value = {inputText}
                onChange = {handleInputTextChange}
            ></input>
            <button
                onClick = {handleInputTextAdd}
            >Add</button>
        </div>
    )
}

export default TodoForm
