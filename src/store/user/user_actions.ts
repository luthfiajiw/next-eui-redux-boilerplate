import Axios, { AxiosResponse } from "axios";
import { UserActionTypes } from "./user_types";
import { setLoading } from "../loading/loading_actions";

export const getUsers: Function = (pageSize: number, pageIndex: number) => async dispatch => {
    dispatch(setLoading(true));

    const res: AxiosResponse = await Axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
        type: UserActionTypes.GET_USERS,
        results: res.data,
        pageIndex,
        pageSize
    });

    dispatch(setLoading(false));
}