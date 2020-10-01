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