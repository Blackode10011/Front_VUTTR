import toolRepository from '../services/api/tools';

export const getAllTools = (token) => {
	return (dispatch) => {
		toolRepository.getAll(token)
		.then(
			(response) => {
				dispatch({
					type: 'LOAD_TOOLS',
					payload: response,
				});
			}
		);
	};
};

export const createTool = (token, tool) => {
	return (dispatch) => {
		toolRepository.createTool(token, tool)
		.then(
			(response) => {
				dispatch({ type: 'CREATE_TOOL' });
				console.log(response)
			}
		);
	};
};

export const deleteTool = (token, id) => {
	return (dispatch) => {
		toolRepository.deleteTool(token, id)
		 .then(dispatch({ type: 'DELETE_TOOL' }));
	};
};

export const handleDeleteTool = () => {
	return (dispatch) => {
		dispatch({ type: "SHOW_DELETE_TOOL" });
	};
};

export const handleCloseDeleteTool = () => {
	return (dispatch) => {
		dispatch({ type: "CLOSE_DELETE_TOOL" });
	};
};

export const handleAddTool = () => {
	return (dispatch) => {
		dispatch({ type: "SHOW_ADD_TOOL" });
	};
};

export const handleClose = () => {
	return (dispatch) => {
		dispatch({ type: "CLOSE_ADD_TOOL" });
	};
};