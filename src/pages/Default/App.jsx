import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTools } from '../../actions/tools'; 


import './App.scss';
import Topbar from '../../components/Topbar';
import Main from '../../components/Main';


function App() {
	const dispatch = useDispatch();
	const isLogged = useSelector(state => state.authorization.isLogged);
	const token = useSelector(state => state.authorization.token);
	const tools = useSelector(state => state.tools.tools);
	console.log(token)
	useEffect(() => {
		
		dispatch(getAllTools(token));

	},[dispatch, token]);

	return (
    <div className='App'>
			<div className='container'>
				<Topbar/>
				{
					isLogged ? (
						<Main card={tools}/>
					):(
						<Redirect to='/login' />
					)
				}
    	</div>
		</div>
  );
}

export default App;
