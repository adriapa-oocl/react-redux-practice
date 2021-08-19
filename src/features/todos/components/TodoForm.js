import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../../apis/todos';
import { AddTodo } from '../reducers/todosSlice';
import { Input, message } from 'antd';

function TodoForm() {
    const { Search } = Input;

    const addSuccess = () => {
        message.success('Todo successfully added');
    }

    const addFail = () => {
        message.warning('Your to-do can not be empty!');
    }

    const [inputText, setText] = useState("");
    const dispatch = useDispatch();

    function handleInputTextChange(event){
        setText(event.target.value);
    }

    function handleInputTextAdd(){
        if(inputText === ''){
            addFail();
        }
        else{
            createTodo(inputText).then((response) => {
                dispatch(AddTodo(response.data));
            });
            addSuccess();
            setText("");
        }
    }

    return (
        <div className = "TodoForm">
            <Search
                placeholder = "input a new to-do here..."
                value = {inputText}
                onChange = {handleInputTextChange}
                enterButton = "Add"
                size = "large"
                onSearch = {handleInputTextAdd}
            />
            {/* <Input className = "inputText"
                type = "text"
                placeholder = "input a new to-do here..."
                value = {inputText}
                onChange = {handleInputTextChange}
            ></Input>
            <Button 
                // type = "primary"
                className = "addButton"
                onClick = {handleInputTextAdd}
            >Add</Button> */}
        </div>
    )
}

export default TodoForm
