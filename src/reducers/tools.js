const INITIAL_STATE = {
	tools: [],
	filteredTools: [],
	searchTitle: '',
	message: '',
	singleTool: [],
	successful: false,
  showAddTool: false,
  showDeleteTool: false,
};

const tools = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_TOOLS': {
      return {
        ...state,
				tools: action.payload,
      };
    }
    case 'CREATE_TOOL': {
      return {
				...state,
				successful: true,
      };
    }
    case 'DELETE_TOOL': {
      return {
        ...state,
        showDeleteTool: false,
      };
    }
    case 'SHOW_ADD_TOOL': {
      return {
        ...state,
        showAddTool: true,
      };
    }
    case 'CLOSE_SUCCESS': {
      return {
        ...state,
				successful: false,
      };
		}
		case 'CLOSE_DELETE': {
      return {
        ...state,
				showDeleteTool: false,
      };
		}
		case 'CLOSE_ADD': {
      return {
        ...state,
				showAddTool: false,
      };
		}	
    case 'SHOW_DELETE_TOOL': {
      return {
        ...state,
				showDeleteTool: true,
				singleTool: action.payload,
      };
    }
		case 'SEARCH_TOOL': {
			return {
				...state,	
				filteredTools: action.payload.filteredTools,
				searchTitle: action.payload.search,
			}
		}
		case 'ERROR': {
			return {
				...state,
				message: action.payload,
			}
		}
    default:
      return state;
  }
};

export default tools;
