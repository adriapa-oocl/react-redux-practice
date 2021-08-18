import React, { useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'

function TodoList() {

    return (
        <div>
            <div>
                <h1>Hello, TodoList</h1>
                <TodoForm/>
            </div>
            <div>
                <TodoGroup />
            </div>
        </div>
    )
}

export default TodoList
