import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { user } from "./user/user_reducers";

const initialState = {};
const middleware = [thunk];
const rootReducer = combineReducers({
    user
});

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;