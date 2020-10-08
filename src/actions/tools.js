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
			dispatch({ 
				type: 'CREATE_TOOL', 
				successful: true,
			})
    );
};

export const deleteTool = (token, id) => (dispatch) => {
  toolRepository.deleteTool(token, id)
		 .then(dispatch({ type: 'DELETE_TOOL' }));
};

export const handleDeleteTool = (tool) => (dispatch) => {
	dispatch({ 
		type: 'SHOW_DELETE_TOOL', 
		payload: tool,
	});
};

export const handleCloseDelete = () => (dispatch) => {
	
	dispatch({ type: 'CLOSE_DELETE' });
};

export const handleAddTool = () => (dispatch) => {
  dispatch({ type: 'SHOW_ADD_TOOL' });
};

export const handleCloseAdd = () => (dispatch) => {
  dispatch({ type: 'CLOSE_ADD' });
};

export const filterTools = (title, tools) => (dispatch) => {
	if (title !== '') {
		dispatch({
			type: 'SEARCH_TOOL',
			payload: {
				filteredTools: tools.filter(
					findTool => findTool.title.toLowerCase()
					.includes(title.toLowerCase())),
				search: title,
			},
		});
	}else {
		dispatch({
			type: 'SEARCH_TOOL',
			payload: {
				filteredTools: tools,
				search: title,
			}, 
		});
	}
};
export const getByTag = (token, tag) => (dispatch) => {
  toolRepository.getByTag(token, tag)
    .then(
      (response) => {
        dispatch({
          type: 'SEARCH_TOOL',
          payload: { 
						filteredTools: response,
						search: tag,
					},
        });
      },
    );
};

export const errorMessage = (message) => (dispatch) => {
	dispatch({
		type: 'ERROR',
		payload: {
			message: message,
		},
	});
}