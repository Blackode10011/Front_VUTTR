const INITIAL_STATE = {
	isLogged: false,
	token: '',
	errorMessage: '',
	user: []
}

const authorization = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOGIN_SUCESS": {
			return {
				isLogged: true,
				token: action.payload.token,
				user: action.payload.findedUser,
			}
		}
		default:
			return state;
	}
}

export default authorization;