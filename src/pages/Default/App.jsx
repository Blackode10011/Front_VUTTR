import React from 'react';
import './App.scss';
import Topbar from '../../components/Topbar';
import { Redirect } from 'react-router-dom';

function App() {
	const userAuth = false;

	return (
    <div className='App'>
			<div className='container'>
				<Topbar/>
				
				{
					userAuth ? (
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
