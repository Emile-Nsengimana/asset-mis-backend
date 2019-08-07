import { ADD_USER } from '../constants/index';

export const addUser = (payload) => {
    return {
        type: ADD_USER,
        payload
    };
}
