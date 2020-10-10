const INITIAL_STATE = {
  isLogged: false,
  token: '',
  user: [],
};

const authorization = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        isLogged: true,
        token: action.payload.token,
        user: action.payload.findedUser,
      };
		}
		case 'LOGOUT_SUCCESS': {
      return {
        isLogged: false,
        token: '',
        user: '',
      };
    }
    default:
      return state;
  }
};

export default authorization;
