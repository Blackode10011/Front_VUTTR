const INITIAL_STATE = {
	tools: []
}

const tools = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOAD_TOOLS": {
			return {
				tools: action.payload,
			}
		}
		default:
			return state;
	}
}

export default tools;