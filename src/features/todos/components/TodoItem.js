import React from 'react'
import { selectTodoById, ToggleTodo, ToggleTodoRemove } from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/TodoItem.css"
import { deleteTodo, updateTodo } from '../../apis/todos';

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))

    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";

    function handeTodoClick(){
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
            dispatch(ToggleTodo({id:props.itemId, updateTodo: response.data}));
        });
    }

    function handleTodoRemove(event){
        deleteTodo(props.itemId).then((response) => {
            dispatch(ToggleTodoRemove(response.data));
        })
        event.stopPropagation();
        // event.stopPropagation();
        // dispatch(ToggleTodoRemove(props.itemId));
    }

    return (
        <div>
            <ul 
            className = {`TodoItem-todo ${todoStatus}`}
            onClick = {handeTodoClick}>
                <li>{todo.text}
                <span 
                    className ="todoRemove" 
                    onClick = {handleTodoRemove}>x</span>
                </li>
            </ul>            
        </div>
    )
}

export default TodoItem

// const TodoItem = ( {itemId}) => {
//     const todo = useSelector((state) => selectTodoById(state, itemId));

//     const dispatch = useDispatch();

//     const handleToDoClick = () => {
//         updateTodo(itemId, {done: !todo.done}).then((response) => {
//             dispatch(ToggleTodo({itemId, updateTodo:response.data}));
//         });
//     };

//     const handleToDoRemove = (event) => {
//         event.stopPropagation();
//         dispatch(ToggleTodoRemove(itemId));
//     };

//     const todoStatus = todo.done ? "done" : "";

//         return (
//         <div>
//             <ul 
//             className = {`TodoItem-todo ${todoStatus}`}
//             onClick = {handeTodoClick}>
//                 <li>{todo.text}
//                 <span 
//                     className ="todoRemove" 
//                     onClick = {handleTodoRemove}>x</span>
//                 </li>
//             </ul>            
//         </div>
//     )
// };
