import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from './userData';

const fetchUsers = () => async (dispatch: (arg0: { type: string; Users?: any; error?: any; }) => any) => {
    
        dispatch(fetchUsersPending());
        fetch('https://fakestoreapi.com/users')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchUsersSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchUsersError(error));
        })
    
}

export default fetchUsers;