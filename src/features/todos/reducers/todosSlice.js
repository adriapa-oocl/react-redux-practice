import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";


const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState();

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
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            });
        },
        ToggleTodoRemove(state, action){
            todosAdapter.removeOne(state, action.payload.id);
        }
    },
});

export default todosSlice.reducer;

export const { selectAll: selectTodos, selectIds: selectTodoIds, selectById: selectTodoById } = todosAdapter.getSelectors((state) => state.todoList);

export const { AddTodo, ToggleTodo, ToggleTodoRemove, AddTodos } = todosSlice.actions;

export const selectDoneTodo = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done));