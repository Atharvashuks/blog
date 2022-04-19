import { combineReducers } from "redux";

import postReducer from "./posts.reducer";
import categoriesReducer from "./categories.reducers";

export default combineReducers({ postReducer, categoriesReducer });
