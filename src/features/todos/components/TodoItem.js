import React from 'react'
// import { initialTodoList } from '../../../common/constants/constants';
// import { getTodoById } from '../../../common/utils/utils';
import { selectTodoById } from '../reducers/todosSlice';
import { useSelector } from 'react-redux';

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))
    // const todo = getTodoById(initialTodoList, props.itemId);

    return (
        <div>
            {todo.text}
        </div>
    )
}

export default TodoItem