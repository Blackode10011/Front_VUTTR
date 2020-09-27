import React from 'react';

import './Main.scss';

function Main(props) {
	console.log(props)

	return (
		<div className='container'>
			<div className='Main'>
				<header className='Main_header'>
					<input 
						type='text'
						placeholder='Search'
						className='Main_header--search'
					/>
					<input 
						type='checkbox' 
						className='Main_header--checkbox'
					/>
  				<label>Tags Only</label>
					<button>Add</button>
				</header>
				{props.card.map((card, index) => {
					return(
						<section key={index} className='Main_card' >	
							<nav className='Main_card--header'>
								<div className='Main_card--title'>{card.title}</div>
								<i>Remove</i>
							</nav>
							<nav className='Main_card--section'>
								<div className='Main_card--description'>
									<p>{card.description}</p>
								</div>
								{card.tags.map((tag, index)=>{
									return(
										<div key={index} className='Main_card--tags' >
											#{tag}
										</div>
									);
								})}
							</nav>
							
						</section>
					);
				})}
					

			</div>
			
		</div>
		
	);
};

export default Main;