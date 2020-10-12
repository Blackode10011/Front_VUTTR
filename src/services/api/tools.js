import service from '../index.js';

const url = service.BASE_URL;

function getAll(token) {
  return fetch(`${url}/tools`, {
    method: 'GET',
    headers: {
			'Content-type': 'application/json',
      Authorization: token,
    },
  })
	.then(async (response) => { 
		if (response.ok) {
			return await response.json();	
		}else{
			return await response.status;
		}
	});
}

function getByTag(token, tag) {
  return fetch(`${url}/tools?tag=${tag}`, {
    method: 'GET',
    headers: {
			'Content-type': 'application/json',
			Authorization: token,
    },
  })
	.then(async (response) => { 
		if (response.ok) {
			return await response.json();	
		}else{
			return await response.status;
		}
	});
}

function createTool(token, tool) {
  return fetch(`${url}/tools`, {
    method: 'POST',
    headers: {
			'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(tool),
  })
	.then(async (response) => { 
		if (response.ok) {
			return await response.json();	
		}else{
			return await response.status;
		}
	});
}

function deleteTool(token, id) {
  return fetch(`${url}/tools/${id}`, {
    method: 'DELETE',
    headers: {
			'Content-type': 'application/json',
      Authorization: token,
    },
  })
	.then(async (response) => { 
		return await response.status;
	});
}

export default {
  getAll,
  createTool,
	deleteTool,
	getByTag,
};
