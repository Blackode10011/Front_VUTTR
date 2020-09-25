import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTools } from '../../actions/tools'; 

export default function Cards() {
	const dispatch = useDispatch();
	const token = useSelector(state => state.authorization.token);
	const tools = useSelector(state => state.tools.tools)
	
	useEffect(() => {
		
		dispatch(getAllTools(token));

	},[dispatch, token]);

	const card = tools.map((card) => {card});

	return (
		<section className='container'>
			{
				
				card
			}
		</section>
	);
};