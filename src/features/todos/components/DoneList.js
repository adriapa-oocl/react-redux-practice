import { selectDoneTodo } from '../reducers/todosSlice';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem'
import React from 'react'

function DoneList() {
    const doneTodoIds = useSelector(selectDoneTodo);

    return (
        <div>
            <h2>Done List</h2>
            <ul>
                List of done todo
            </ul>
            <ul>
            {doneTodoIds.map((id) => (
                    <TodoItem key={id} itemId={id} />
                ))
            } 
            </ul>
        </div>
    )
}

export default DoneList

