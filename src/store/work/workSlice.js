import { createSlice } from "@reduxjs/toolkit";
import initialState from "./work.state";

const workSlice = createSlice({
    name: 'work',
    initialState,
    reducers : {
        updateNumberOfComments: function (state, { payload }) {
            const postIndex = state.workPosts.findIndex(post => post.id === payload.postId);
            return {...state, workPosts: [
                ...state.workPosts.slice(0, postIndex),
                Object.assign({}, state.workPosts[postIndex], { numberOfComments: payload.numberOfComments }),
                ...state.workPosts.slice(postIndex + 1)
            ]}
        }
    }
})

export const { updateNumberOfComments } = workSlice.actions;
export default workSlice.reducer;