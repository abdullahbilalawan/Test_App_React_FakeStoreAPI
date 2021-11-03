const API_URL = 'https://fakestoreapi.com/';

export type user = {
	email: string;
	username: string;
	password: string;
	name: {
		firstname: string;
		lastname: string;
	};
	address: {
		city: string;
		street: string;
		number: number;
		zipcode: string;
		geolocation: {
			lat: string;
			long: string;
		};
	};
	phone: string;
};

const register_service = (
	email: string,
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
	phone: string
): any => {
	fetch('https://fakestoreapi.com/users', {
		method: 'POST',
		body: JSON.stringify({
			email: email,
			username: username,
			password: password,
			name: {
				firstname: firstname,
				lastname: lastname,
			},
			address: {
				city: city,
				street: street,
				number: number,
				zipcode: zipcode,
				geolocation: {
					lat: lat,
					long: long,
				},
			},
			phone: phone,
		}),
	}).then((response) => {
        console.log(response)
        return response

    })
};

export { register_service };
