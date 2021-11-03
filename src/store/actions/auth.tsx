import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	SET_MESSAGE,
} from './types';

import login_service from '../../services/login';
import {register_service} from '../../services/register';
import {logout_service} from '../../services/logout';

export const register = (email: string,
	username: string,
	password: string,
	firstname: string,
	lastname: string,
	city: string,
	street: string,
	number: number,
	zipcode: string,
	lat: string,
	long: string,
	phone: string) => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
	return register_service(email,
        username,
        password,
        firstname,
        lastname,
        city,
        street,
        number,
        zipcode,
        lat,
        long,
        phone)
        .then(
		(response:any) => {
			dispatch({
				type: REGISTER_SUCCESS,
			});

			dispatch({
				type: SET_MESSAGE,
				payload: response.data.message,
			});

			return Promise.resolve();
		},
		(error:any) => {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			dispatch({
				type: REGISTER_FAIL,
			});

			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});

			return Promise.reject();
		}
	);
};

export const login = (username:string, password:string):any => (dispatch: (arg0: { type: string; payload?: any; }) => any) => {
	return login_service(username, password).then(
		(data) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: { user: data },
			});

			return Promise.resolve();
		},
		(error) => {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			dispatch({
				type: LOGIN_FAIL,
			});

			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});

			return Promise.reject();
		}
	);
};

export const logout = () => (dispatch: (arg0: { type: string; }) => void) => {
	logout_service();

	dispatch({
		type: LOGOUT,
	});
};
