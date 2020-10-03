import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleAddTool, filterTools } from '../../actions';

import './SearchTool.scss';
import AddIcon from '../../assets/icons/plus.svg';
import SearchIcon from '../../assets/icons/Icon-Search-2px.svg';

import useForm from '../../hooks';

export default function SearchTool(props) {
	const dispatch = useDispatch();

	const initValues= {
		title: ''
	}

	const { values, handleChange } = useForm(initValues);
	
	/*useEffect(() => {
		dispatch(filterTools(values.title, props.tool));
	}, [values.title, props.tool, dispatch]);
*/
console.log(props)
	return (
		<header className='Main_header'>
			<div className='Main_header--search'>
				<img src={SearchIcon} alt='SearchIcon' className='Main_header--searchImg'/>
				<input 
					type='text'
					name='title'
					placeholder='Search'
					value={values.title}
					onChange={() => dispatch(filterTools(values.title, props.tools))}
					className='Main_header--searchInput'
				/>
			</div>
			<input 
				type='checkbox' 
				className='Main_header--checkbox'
			/>
			<label>Tags Only</label>
			<button onClick={() => dispatch(handleAddTool())}>
				<img src={AddIcon} alt='AddIcon'/>
				Add
			</button>	
		</header>
	);
};