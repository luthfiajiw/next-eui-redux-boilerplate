import { Reducer } from "redux";
import { User, UserActionTypes, UserState } from "./user_types";

let detail: User;

export const initialState: UserState = {
    busy: true,
    detail,
    results: [],
}

export const user: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.GET_USERS:
            return {
                ...state,
                busy: action.payload.busy,
                results: action.payload.results
            }
        default:
            return state;
    }
}