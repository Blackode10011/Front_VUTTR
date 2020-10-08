import userRepository from '../services/api/users.js';

export const userAuth = (values) => (dispatch) => {
  userRepository.login({
    email: values.email,
    password: values.password,
  }).then(
    (response) => {
      dispatch({
        type: 'LOGIN_SUCESS',
        payload: response,
      });
      console.log(response);
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
					type: 'ERROR_CREATE_USER',
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