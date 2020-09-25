import userRepository from '../services/api/users.js';

export const userAuth = (values) => {
	return (dispatch) => {
		userRepository.login({
			email: values.email,
			password: values.password,
		}).then(
			(response) => {
				dispatch({
					type: 'LOGIN_SUCESS',
					payload: response,
				});
				console.log(response)
			}
		);
	};
}