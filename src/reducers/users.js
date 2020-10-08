const INITIAL_STATE = {
  message: '',
	successfully: false,
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_USER': {
      return {
				...state,
				message: action.payload.message,
				successfully: true,
      };
		}
		case 'ERROR_USER': {
			return {
				...state,
				message: action.payload,
				successfully: false,
			};
		}
		case 'CLOSE_SUCCESS': {
      return {
				...state,
				message: action.payload,
				successfully: false,
      };
		}
    default:
      return state;
  }
};

export default users;
