import { LoadingTypes } from "./loading_types"

export const setLoading: Function = (busy: boolean) => async dispatch => {
    dispatch({
        type: LoadingTypes.SET_LOADING,
        payload: busy
    })
}