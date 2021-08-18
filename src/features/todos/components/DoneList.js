import { selectDoneTodo } from '../reducers/todosSlice';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem'
import React from 'react'

function DoneList() {
    const doneTodos = useSelector(selectDoneTodo);

    return (
        <div>
            <h1>Todo List</h1>
            <h4>
                List of completed todo
            </h4>
            {doneTodos.map((doneItem) => (
                    <TodoItem key={doneItem.id} itemId={doneItem.id} />
                ))
            } 
        </div>
    )
}

export default DoneList

