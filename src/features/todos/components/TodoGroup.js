import React from 'react'
import TodoItem from './TodoItem'
import { selectTodoIds, AddTodos } from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../apis/todos'

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    const dispatch = useDispatch();

    getTodos().then((response) => {
        dispatch(AddTodos(response.data))
    })
        
    return (
        <div>
            {
                todoIds.map((id) => (
                    <TodoItem key={id} itemId={id} />
                ))
            }
        </div>
    )
}

export default TodoGroup
