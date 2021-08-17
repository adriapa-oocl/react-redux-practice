import React from 'react'
import { initialTodoList } from '../../common/constants/constants';
import { getTodoById } from '../../common/utils/utils';

function TodoItem(props) {
    const todo = getTodoById(initialTodoList, props.itemId);

    function removeToDo(){

    }

    return (
        <div>
            {todo.text}
            <button onClick>x</button>
        </div>
    )
}

export default TodoItem