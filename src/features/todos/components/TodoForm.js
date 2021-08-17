import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddTodo } from '../reducers/todosSlice';

function TodoForm() {

    const [inputText, setText] = useState("");
    const dispatch = useDispatch();

    function handleInputTextChange(event){
        setText(event.target.value);
        // console.log(event.target.value);
    }

    function handleInputTextAdd(){
        if(inputText === ''){
            alert("Your to-do can not be empty!");
        }
        else{
            dispatch(AddTodo(inputText));
            setText("");
        }

    }

    return (
        <div className = "TodoForm">
            <input class = "inputText"
                type = "text"
                placeholder = "input a new to-do here..."
                value = {inputText}
                onChange = {handleInputTextChange}
            ></input>
            <button class = "addButton"
                onClick = {handleInputTextAdd}
            >Add</button>
        </div>
    )
}

export default TodoForm
