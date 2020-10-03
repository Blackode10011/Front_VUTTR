import service from '../index.js';

const url = service.BASE_URL;

function getAll(token) {
  return fetch(`${url}/tools`, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  })
    .then(async (response) => await response.json());
}

function createTool(token, tool) {
  console.log(tool);
  return fetch(`${url}/tools`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(tool),
  })
    .then(async (response) => await response.json());
}

function deleteTool(token, id) {
  return fetch(`${url}/tools/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  })
    .then(async (response) => await response.json());
}

export default {
  getAll,
  createTool,
  deleteTool,
};
