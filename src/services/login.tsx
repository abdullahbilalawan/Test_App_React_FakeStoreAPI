import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/';

const login_service = (username: string, password: string) => {
	return axios
		.post(API_URL + 'auth/login', {
			username,
			password,
		})
		.then((response) => {
			console.log(response)
			return response
	
		})
};

export default login_service;