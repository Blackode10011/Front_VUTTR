import React from 'react';
import { useDispatch } from 'react-redux';
import { handleCloseDeleteTool, deleteTool } from '../../actions'; 

import './DeleteTool.scss';
import CloseIcon from '../../assets/icons/cancel.svg';

function DeleteTool(props) {
	const dispatch = useDispatch();
	console.log(props)
	return (
		<div className='container'>
		 <div className='Delete'>
			<nav className='Delete_header'>
				<div className='Delete_header--title'>
					<img src={CloseIcon} alt='CloseIcon'/>
					<span> Add new tool</span>
				</div>
			</nav>
			<nav className='Delete_content'>
				<span>Are you sure you want to remove ?</span>
				<div className='Delete_content--buttons'>
					<button
						onClick={() => dispatch(handleCloseDeleteTool())}>
						Cancel  
					</button>
					<> </>
					<button 
						onClick={()=> dispatch(
							deleteTool(props.token, props.card.id))
							}>
						Yes, remove
					</button>
				</div>
				
			</nav>

		 </div>
		</div>
	);
};

export default DeleteTool;