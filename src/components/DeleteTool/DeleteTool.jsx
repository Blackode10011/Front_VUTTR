import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleCloseDelete, deleteTool, getAllTools } from '../../actions'; 

import './DeleteTool.scss';
import CloseIcon from '../../assets/icons/cancel.svg';

function DeleteTool(props) {
	const dispatch = useDispatch();
	const singleTool = useSelector(state => state.tools.singleTool);

	function handleDelete() {
		dispatch(deleteTool(props.token, singleTool.id));
		dispatch(getAllTools(props.token));
		dispatch(handleCloseDelete());
	};

	return (
		<div className='container'>
		 <div className='Delete'>
			<nav className='Delete_header'>
				<div className='Delete_header--title'>
					<img src={CloseIcon} alt='CloseIcon'/>
					<span> Remove tool</span>
				</div>
			</nav>
			<nav className='Delete_content'>
				<span>Are you sure you want to remove ?</span>
				<div className='Delete_content--buttons'>
					<button
						onClick={() => dispatch(handleCloseDelete())}>
						Cancel  
					</button>
					<> </>
					<button 
						onClick={handleDelete}>
						Yes, remove
					</button>
				</div>
			</nav>
		 </div>
		</div>
	);
};

export default DeleteTool;