import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../../apis/todos';
import { AddTodo } from '../reducers/todosSlice';
import { Button, Input } from 'antd';

function TodoForm() {

    const [inputText, setText] = useState("");
    const dispatch = useDispatch();

    function handleInputTextChange(event){
        setText(event.target.value);
    }

    function handleInputTextAdd(){
        if(inputText === ''){
            alert("Your to-do can not be empty!");
        }
        else{
            createTodo(inputText).then((response) => {
                dispatch(AddTodo(response.data));
            });
            setText("");
        }
    }

    return (
        <div className = "TodoForm">
            <Input className = "inputText"
                type = "text"
                placeholder = "input a new to-do here..."
                value = {inputText}
                onChange = {handleInputTextChange}
            ></Input>
            <Button 
                // type = "primary"
                className = "addButton"
                onClick = {handleInputTextAdd}
            >Add</Button>
        </div>
    )
}

export default TodoForm
