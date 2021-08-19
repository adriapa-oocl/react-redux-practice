import React, { useState } from 'react'
import { selectTodoById, UpdateTodo, ToggleTodoRemove } from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/TodoItem.css"
import { deleteTodo, updateTodo } from '../../apis/todos';
import { message, Modal } from 'antd';

function TodoItem(props) {

    const [inputTodoText, setTodoText] = useState("");
    const todo = useSelector(state => selectTodoById(state, props.itemId))
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handeTodoClick(event){
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
            dispatch(UpdateTodo({id:props.itemId, updateTodo: response.data}));
        });
        event.stopPropagation();
    };

    function handleTodoRemove(event){
        deleteTodo(props.itemId).then((response) => {
            dispatch(ToggleTodoRemove(response.data));
        })
        event.stopPropagation();
        removeSuccess();
    };

    function handleTodoChange (event) {
        setTodoText(event.target.value);
    }

    const removeSuccess = () => {
        message.success('To-do item succesfully removed!');
    }

    const editSuccess = () => {
        message.success('To-do item succesfully changed!');
    }
  
    const showModal = (event) => {
        setIsModalVisible(true);
        event.stopPropagation();
    }

    const handleOk = (event) => {
        if (inputTodoText === ''){
            setIsModalVisible(false);
        }
        else{
            updateTodo(props.itemId, {text: inputTodoText}).then((response) => {
                dispatch(UpdateTodo({id:props.itemId, updateTodo: response.data}));
            });
            event.stopPropagation();
            setIsModalVisible(false);
            editSuccess();
            setTodoText("");
        }
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (    
        <div>
            <ul 
            className = {`TodoItem-todo ${todoStatus}`}
            onClick = {handeTodoClick}>
                <li>{todo.text}
                {todoStatus === '' && <span 
                    className ="todoEdit"
                    onClick = {showModal}
                    >EDIT</span>
                }
                <span                    
                    className ="todoRemove" 
                    onClick = {handleTodoRemove}>x</span>
                </li>
            </ul>    
            <Modal title="Edit To-do" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <input
                    style = {{width: 480}}
                    placeholder = {todo.text}
                    value = {inputTodoText}
                    onChange = {handleTodoChange}
                />
            </Modal>        
        </div>
    )
}

export default TodoItem