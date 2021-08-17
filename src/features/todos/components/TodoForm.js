import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import "../styles/TodoForm.css"
import { AddTodo } from '../reducers/todosSlice';

function TodoForm() {

    const [inputText, setText] = useState("");
    const dispatch = useDispatch();

    function handleInputTextChange(event){
        setText(event.target.value);
        // console.log(event.target.value);
    }

    function handleInputTextAdd(){
        dispatch(AddTodo(inputText));
        setText("");
        // console.log("input text to be added: ", inputText);
    }

    return (
        <div className = "TodoForm">
            <input
                type = "text"
                placeholder = "input a new todo here..."
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
