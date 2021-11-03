import {FETCH_Users_PENDING, FETCH_Users_SUCCESS, FETCH_Users_ERROR} from '../actions/userData';

const initialState = {
    pending: false,
    Users: [],
    error: null
}

export function UsersReducer(state = initialState, action: any) {
    switch(action.type) {
        case FETCH_Users_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_Users_SUCCESS:
            return {
                ...state,
                pending: false,
                Users: action.payload
            }
        case FETCH_Users_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getUsers = (state: { Users: any; }) => state.Users;
export const getUsersPending = (state: { pending: any; }) => state.pending;
export const getUsersError = (state: { error: any; }) => state.error;
