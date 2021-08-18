import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { getTodos } from "../../apis/todos";


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
            todosAdapter.addOne(state, action.payload);
        },
        AddTodos(state, action){
            todosAdapter.addMany(state, action.payload);
        },
        ToggleTodo(state, action){
            // const todo = state.entities[action.payload]
            // todo.done = !todo.done;
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            })
        },
        ToggleTodoRemove:todosAdapter.removeOne
    },
});

export default todosSlice.reducer;

export const { selectAll: selectTodos, selectIds: selectTodoIds, selectById: selectTodoById } = todosAdapter.getSelectors((state) => state.todoList);

export const { AddTodo, ToggleTodo, ToggleTodoRemove, AddTodos } = todosSlice.actions;

export const selectDoneTodo = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done));