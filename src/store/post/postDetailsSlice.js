import { createSlice } from "@reduxjs/toolkit";
import initialState from "./post.state";

const postDetailsSlice = createSlice({
    name: 'postDetails',
    initialState,
    reducers: {
        addNewComment: function (state, action) {
            const postIndex = state.postDetails.findIndex(post => post.id === action.payload.postId);
            return { ...state, postDetails: [
                ...state.postDetails.slice(0, postIndex),
                Object.assign({}, state.postDetails[postIndex], { comments: [action.payload.comment, ...state.postDetails[postIndex].comments  ]}),
                ...state.postDetails.slice(postIndex+1)
            ]}
        },
        replyToComment: (state, { payload }) => {
            const postIndex = state.postDetails.findIndex(post => post.id === payload.postId);
            const commentIndex = state.postDetails[postIndex].comments.findIndex(comment => comment.id === payload.commentId);
            return { ...state, postDetails: [
                ...state.postDetails.slice(0, postIndex),
                Object.assign({}, state.postDetails[postIndex], { comments: [
                      ...state.postDetails[postIndex].comments.slice(0, commentIndex),
                      Object.assign({}, state.postDetails[postIndex].comments[commentIndex], { replies: [...state.postDetails[postIndex].comments[commentIndex].replies, payload.comment ]}),
                      ...state.postDetails[postIndex].comments.slice(commentIndex + 1)            
                ]}),
                ...state.postDetails.slice(postIndex + 1)
            ]}
        }
    }
})
export const { addNewComment, increment, replyToComment } = postDetailsSlice.actions;
export default postDetailsSlice.reducer;
