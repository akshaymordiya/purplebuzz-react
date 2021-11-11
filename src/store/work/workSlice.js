import { createSlice } from "@reduxjs/toolkit";
import initialState from "./work.state";

const workSlice = createSlice({
    name: 'work',
    initialState,
})

export default workSlice.reducer;