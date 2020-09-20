import React from 'react';
import './App.scss';
import Topbar from '../../components/Topbar';
import { Redirect } from 'react-router-dom';

function App() {
	const userAuth = false;
	console.log(userAuth)
	return (
    <div className='App'>
			<div className='container'>
				<Topbar/>
				
				{
					userAuth ? (
						<p>Main Default</p>
						
					):(
						<Redirect to='/login' userAuth={userAuth} />
					)
				}
    	</div>
		</div>
  );
}

export default App;
