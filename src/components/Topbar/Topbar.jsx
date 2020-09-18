import React from 'react';
import './Topbar.scss';

export default function Topbar () {
	return (
		<header className="Header">
			<div className='Header--title'>
				<span>VUTTR</span>
				<p>Very Useful Tools to Remember</p>
			</div>
		</header>
	);
}