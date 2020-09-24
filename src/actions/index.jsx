import userRepository from '../services/api/users.jsx';

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
			}
		);
	};
}