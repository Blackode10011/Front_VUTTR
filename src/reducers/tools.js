const INITIAL_STATE = {
	tools: [],
	filteredTools: [],
	searchTitle: ' ',
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
    case 'CLOSE_ADD_TOOL': {
      return {
        ...state,
        showAddTool: false,
      };
    }
    case 'SHOW_DELETE_TOOL': {
      return {
        ...state,
        showDeleteTool: true,
      };
    }
    case 'CLOSE_DELETE_TOOL': {
      return {
        ...state,
        showDeleteTool: false,
      };
		}
		case 'SEARCH_TOOL': {
			return {
				...state,	
				filteredTools: action.payload.filteredTools,
				searchTitle: action.payload.search,
			}
		}
    default:
      return state;
  }
};

export default tools;
