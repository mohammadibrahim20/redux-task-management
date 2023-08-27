import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};
const tasksSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {},
});
export default tasksSlice.reducer;
