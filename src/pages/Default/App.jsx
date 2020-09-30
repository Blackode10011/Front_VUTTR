import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './App.scss';
import Main from '../../components/Main';


function App() {
	const isLogged = useSelector(state => state.authorization.isLogged);
	console.log(isLogged)
	return (
    <div className='App'>
			<div className='container'>
				{
					isLogged ? (
						<Main />
					):(
						<Redirect to='/login' />
					)
				}
    	</div>
		</div>
  );
}

export default App;
