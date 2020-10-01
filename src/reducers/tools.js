const INITIAL_STATE = {
	tools: [],
	showAddTool: false
}

const tools = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOAD_TOOLS": {
			return {
				...state,
				tools: action.payload,
			}
		}
		case "CREATE_TOOL": {
			return {
				...state
			}
		}
		case "SHOW_ADD_TOOL": {
			return {
				...state,
				showAddTool: true,
			}
		}
		case "CLOSE_ADD_TOOL": {
			return {
				...state,
				showAddTool: false,
			}
		}
		default:
			return state;
	}
}

export default tools;