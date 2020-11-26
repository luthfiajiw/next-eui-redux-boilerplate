import { Reducer } from "redux";
import { LoadingState, LoadingTypes } from "./loading_types";

export const inititalState: LoadingState = {
    busy: false
};

export const loading: Reducer<LoadingState> = (state = inititalState, action) => {
    switch (action.type) {
        case LoadingTypes.SET_LOADING:
            return {
                ...state,
                busy: action.payload
            }
    
        default:
            return state;
    }
}