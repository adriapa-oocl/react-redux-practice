import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: [1],
    entities: {
        1: {
            id: "1",
            text: "Finish Homework",
            done: false,
        },
    },
});


const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        AddTodo(state, action){
            todosAdapter.addOne(state, {
                // id: state.ids.length+1,
                id: uuid(),
                text: action.payload,
                done: false,
            });
        },
        ToggleTodo(state, action){
            const todo = state.entities[action.payload]
            todo.done = !todo.done;
        },
        ToggleTodoRemove:todosAdapter.removeOne
    },
});

export default todosSlice.reducer;

export const { selectAll: selectTodos, selectIds: selectTodoIds, selectById: selectTodoById } = todosAdapter.getSelectors((state) => state.todoList);

export const { AddTodo, ToggleTodo, ToggleTodoRemove } = todosSlice.actions;

export const selectDoneTodo = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done));