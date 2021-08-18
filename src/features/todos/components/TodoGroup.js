import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import todosSlice, { selectTodoIds, AddTodos } from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../apis/todos'

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     getTodos().then((response) => {
    //         console.log("response.data:", response)
    //         dispatch(AddTodos(response.data))
    //     })
    // }, [])

    getTodos().then((response) => {
        dispatch(AddTodos(response.data))
    })
        
    return (
        <div>
            {
                // getAllTodoIds(initialTodoList).map((id) => (
                    // <TodoItem key={id} itemId={id} />
                // ))
                todoIds.map((id) => (
                    <TodoItem key={id} itemId={id} />
                ))
            }
        </div>
    )
}

export default TodoGroup
