import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    value: 'yyf',
    age: 25
  },
  reducers: {
    changeText: (state, { payload }) => {
      console.log(state.age, payload);
      state.value = 'yyf change'
    },
    deleteText: (state, { payload }) => {
      console.log(payload);
      state.value = 'yyf delete'
    }
  }
})

export const { changeText, deleteText } = footerSlice.actions;

export default footerSlice.reducer;