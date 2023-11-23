import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello World" }]
}


export const todoSlices = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        editTodo:(state, action) =>{
            const { update, input } = action.payload;
            state.todos = state.todos.map((item)=> item.id === update ?  {...item , text:input} : item)
        }
    }
})

export const { addTodo, removeTodo,editTodo } = todoSlices.actions

export default todoSlices.reducer