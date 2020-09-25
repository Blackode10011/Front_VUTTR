import service from '../index.js';

const url = service.BASE_URL;

function login(user) {
	return fetch(`${url}/login`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(user),
	})
	.then(async (response) => {
		if (response.ok) {
			return await response.json();
		} else {
			return await response.json();
		}
	});
}

export default {
	login,
}