import { Reducer } from "redux";
import { User, UserActionTypes, UserState } from "./user_types";

let detail: User;

export const initialState: UserState = {
    detail,
    pageIndex: 0,
    pageSize: 0,
    results: [],
}

export const user: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.GET_USERS:
            return {
                ...state,
                results: action.results,
                pageIndex: action.pageIndex,
                pageSize: action.pageSize
            }
        default:
            return state;
    }
}