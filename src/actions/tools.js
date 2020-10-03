import toolRepository from '../services/api/tools';

export const getAllTools = (token) => (dispatch) => {
  toolRepository.getAll(token)
    .then(
      (response) => {
        dispatch({
          type: 'LOAD_TOOLS',
          payload: response,
        });
      },
    );
};

export const createTool = (token, tool) => (dispatch) => {
  toolRepository.createTool(token, tool)
    .then(
      (response) => {
        dispatch({ 
					type: 'CREATE_TOOL', 
					payload: response,
				});
      },
    );
};

export const deleteTool = (token, id) => (dispatch) => {
  toolRepository.deleteTool(token, id)
		 .then(dispatch({ type: 'DELETE_TOOL' }));
};

export const handleDeleteTool = () => (dispatch) => {
  dispatch({ type: 'SHOW_DELETE_TOOL' });
};

export const handleCloseDeleteTool = () => (dispatch) => {
  dispatch({ type: 'CLOSE_DELETE_TOOL' });
};

export const handleAddTool = () => (dispatch) => {
  dispatch({ type: 'SHOW_ADD_TOOL' });
};

export const handleClose = () => (dispatch) => {
  dispatch({ type: 'CLOSE_ADD_TOOL' });
};

export const filterTools = (title, tools) => (dispatch) => {
	console.log()
	
	if (title !== '') {
		dispatch({
			type: 'SEARCH_TOOL',
			payload: {
				tools: tools.filter(
					findTool => findTool.title.toLowerCase()
					.includes(title.toLowerCase())),
			},
		});
	} else {
		dispatch({
			type: 'LOAD_TOOLS',
			payload: tools,
		});
	}
};