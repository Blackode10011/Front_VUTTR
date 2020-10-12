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
		}else{
			return await response.status;
		}
	});
};

function createUser(user) {
  return fetch(`${url}/register`, {
    method: 'POST',
    headers: {
			'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
		.then(async (response) => { 
			if (response.ok) {
				return await response.json();	
			}else{
				return await response.status;
			}
		});
}

function updateUser(token, user) {
  return fetch(`${url}/users/${user.id}`, {
    method: 'PUT',
    headers: {
			'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(user),
  })
	.then(async (response) => { 
		if (response.ok) {
			return await response.json();	
		}else{
			return await response.status;
		}
	});
}
function deleteUser(token, id) {
  return fetch(`${url}/users/${id}`, {
    method: 'DELETE',
    headers: {
			'Content-Type': 'application/json',
      Authorization: token,
    }
  })
	.then(async (response) => { 
		return await response.status;
	});
}

export default {
	login,
	createUser,
	updateUser,
	deleteUser,
};
