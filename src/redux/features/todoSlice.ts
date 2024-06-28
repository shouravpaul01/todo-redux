import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTodo } from "../../components/todo/todo.instance";

type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.todos.find((todo) => todo.id == action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
    updateTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id?{ ...todo,...action.payload }:{...todo});
      
    },
  },
});
export const { addtodo, removeTodo, toggleComplete, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
