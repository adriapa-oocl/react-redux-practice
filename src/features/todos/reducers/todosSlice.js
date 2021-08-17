import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1","2","3"],
    entities: {
        1: {
            id: "1",
            text: "testing todo test 1",
            done: false,
        },
        2: {
            id: "2",
            text: "testing todo test 2 ",
            done: false,
        },
        3: {
            id: "3",
            text: "testing todo test 3 ",
            done: false,
        },
    },
});

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
});

export default todosSlice.reducer;

export const { selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors((state) => state.todoList);