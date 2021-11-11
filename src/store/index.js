// import { combineReducers, createStore } from "redux";

// const allReducers = combineReducers({

// })

// const store = createStore(allReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import workReducer from "./work/workSlice";
import postDetailsReducer from "./post/postDetailsSlice";

const store = configureStore({
    reducer: {
        work: workReducer,
        posts: postDetailsReducer
    }
})

export default store;