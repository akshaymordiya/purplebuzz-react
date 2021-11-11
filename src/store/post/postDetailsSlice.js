import { createSlice } from "@reduxjs/toolkit";
import initialState from "./post.state";

const postDetailsSlice = createSlice({
    name: 'postDetails',
    initialState,
    reducers: {
        addNewComment: function (state, action) {
            const copyState = state.postDetails.slice();
            const updatedState = copyState.map(post => {
                if(post.id === action.payload.postId){
                    post.comments = [...post.comments, action.payload.comment];
                    return post;
                }
                return post;
            });
            return copyState;
        },
        replyToComment: (state, action) => {
            const copyState = [...state.postDetails];
            const updateComments = copyState.map(post => {
                if(post.id === action.payload.postId){
                    post.comments.forEach(comment => {
                        if(comment.id === action.payload.commentId){
                            comment.replies.unshift(action.payload.comment)
                        }
                    })
                    return post;
                }
                return post;
            });
            return updateComments;
        }
    }
})
export const { addNewComment, replyToComment } = postDetailsSlice.actions;
export default postDetailsSlice.reducer;
