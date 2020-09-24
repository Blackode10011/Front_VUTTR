import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.scss';
import Topbar from '../../components/Topbar';


function App() {
	const isLogged = useSelector(state => state.authorization.isLogged);

	console.log(isLogged)
	return (
    <div className='App'>
			<div className='container'>
				<Topbar/>
				{
					isLogged ? (
						<p>Main Default</p>
						
					):(
						<Redirect to='/login' />
					)
				}
    	</div>
		</div>
  );
}

export default App;
