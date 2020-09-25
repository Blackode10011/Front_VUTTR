import service from '../index.js';

const url = service.BASE_URL;

function getAll(token) {
	return fetch(`${url}/tools`, {
		method: 'GET',
		headers: {
			'Authorization': token,
		}
	})
	.then(async (response) => {
		return await response.json();
	});
}

export default {
	getAll,
}