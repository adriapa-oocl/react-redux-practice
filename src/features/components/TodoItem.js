import React from 'react'
import { initialTodoList } from '../../common/constants/constants';
import { getTodoById } from '../../common/utils/utils';

function TodoItem(props) {
    const todo = getTodoById(initialTodoList, props.itemId);

    return (
        <div>
            <div>{todo.text}</div>
        </div>
    )
}

export default TodoItem