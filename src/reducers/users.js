const INITIAL_STATE = {
	message: '',
	showManageAccount: false,
	userUpdated: [],
	};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_USER': {
      return {
				...state,
				message: action.payload.message,
				};
		}
		case 'UPDATE_USER': {
      return {
				...state,
				message: action.payload.message,
				userUpdated: action.payload.user,
				};
		}
		case 'ERROR_USER': {
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
		case 'SHOW_MANAGE_ACCOUNT': {
			return {
				...state,
				showManageAccount: true,
			};
		}
		case 'CLOSE_MANAGE_ACCOUNT': {
			return {
				...state,
				showManageAccount: false,
			};
		}
    default:
      return state;
  }
};

export default users;
