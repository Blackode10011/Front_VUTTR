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
		case "SHOW_ADD_TOOL": {
			return {
				...state,
				showAddTool: true,
			}
		}
		default:
			return state;
	}
}

export default tools;