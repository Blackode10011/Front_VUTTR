import userRepository from '../services/api/users.js';

export const userAuth = (values) => (dispatch) => {
  userRepository.login({
    email: values.email,
    password: values.password,
  }).then(
    (response) => {
			if(response === 401) {
				dispatch({
					type: 'ERROR_USER',
					payload: 'Failed to validate token',
				});
			}else if(response === 404) {
				dispatch({
					type: 'ERROR_USER',
					payload: 'User not found',
				});
			}else if(response === 403) {
				dispatch({
					type: 'ERROR_USER',
					payload: 'Invalid password',
				});
			}else if(response === 201) {
				dispatch({
					type: 'LOGIN_SUCESS',
					payload: response,
				});
			}
		},
  );
};
export const createUser = (values) => (dispatch) => {
	userRepository.createUser({
		name: values.name,
		email: values.email,
		password: values.password,
	}).then(
		(response) => {
			if (response === 400) {
				dispatch({
					type: 'ERROR_USER',
					payload: 'User already exists',
				});	
			}else {
				dispatch({
					type: 'CREATE_USER',
					payload: {
						user: response,
						message: 'User created',
					},
				});	
			}
		}
	);
};