import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: JSON.parse(localStorage.getItem('todos')) || [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload.text, completed: false });
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
    editTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index].text = action.payload.text;
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    toggleTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTask } = todoSlice.actions;
export default todoSlice.reducer;