import React from 'react';
import { useDispatch } from 'react-redux';
import { handleClose } from '../../actions';

import './AddTool.scss';
import CloseIcon from '../../assets/icons/cancel.svg';
import AddIcon from '../../assets/icons/plus.svg';

function AddTool() {
	const dispatch = useDispatch();
	return (
		<div className='container'>
			<div className='AddTool'>
				<header className='AddTool_header'>
					<div className='AddTool_header--title'>
						<img src={AddIcon} alt='AddIcon'/>
						<span> Add new tool</span>
					</div>
					<img 
						className='AddTool_header--close'
						src={CloseIcon} 
						alt='CloseIcon' 
						onClick={() => dispatch(handleClose())}
					/>	
				</header>
			<form className='AddTool_form'>
				<label>Name</label>
				<input />
				<label>Link</label>
				<input />
				<label>Description</label>
				<textarea />
				<label>Tags</label>
				<input />	

				<button type='submit'>
					Add tool
				</button>			
			</form>
			</div>
			
		</div>
	);
};

export default AddTool;