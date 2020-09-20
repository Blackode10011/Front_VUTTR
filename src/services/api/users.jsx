import service from '../index.jsx';

const url = service.BASE_URL;

function login(user) {
	return fetch(`${url}/login`, {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(user)
	})
	.then(async (response) => {
		if (response.ok) {
			return await response.json;
		} else {
			throw new Error('Error Server!');
		}
	});
}

export default {
	login,
}