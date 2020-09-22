const INITIAL_STATE = {
	isLogged: false,
	token: '',
	errorMessage: '',
}

const authorization = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOGIN_SUCESS':
			return {
				...state,
				isLogged: true,
			}
		default:
			return state;
	}
}

export {authorization};