const INITIAL_STATE = {
  message: '',
  user: [],
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_USER': {
      return {
				...state,
				user: action.payload.user,
				message: action.payload.message,
      };
		}
		case 'ERROR_CREATE_USER': {
			return {
				...state,
				message: action.payload,
			};
		}
		case 'CLOSE_SUCCESS': {
      return {
				...state,
				message: action.payload,
      };
		}
    default:
      return state;
  }
};

export default users;
