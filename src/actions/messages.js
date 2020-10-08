export const handleCloseAlert = () => (dispatch) => {
  dispatch({ 
		type: 'CLOSE_SUCCESS', 
		payload: '' 
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