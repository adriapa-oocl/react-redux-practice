import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'

function TodoList() {
    return (
        <div>
            <h1>TodoList</h1>
            <TodoGroup />
            <TodoForm/>
        </div>
    )
}

export default TodoList
