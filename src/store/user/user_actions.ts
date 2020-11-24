import Axios, { AxiosResponse } from "axios";
import { UserActionTypes } from "./user_types";

export const getUsers = () => async dispatch => {
    const res: AxiosResponse = await Axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
        type: UserActionTypes.GET_USERS,
        payload: {
            busy: false,
            results: res.data
        }
    })
}