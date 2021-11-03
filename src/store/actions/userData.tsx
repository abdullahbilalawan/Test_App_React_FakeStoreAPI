
export const FETCH_Users_PENDING = 'FETCH_Users_PENDING';
export const FETCH_Users_SUCCESS = 'FETCH_Users_SUCCESS';
export const FETCH_Users_ERROR = 'FETCH_Users_ERROR';

export function fetchUsersPending() {
    return {
        type: FETCH_Users_PENDING
    }
}

export function fetchUsersSuccess(Users: any) {
    return {
        type: FETCH_Users_SUCCESS,
        Users: Users
    }
}

export function fetchUsersError(error: any) {
    return {
        type: FETCH_Users_ERROR,
        error: error
    }
}