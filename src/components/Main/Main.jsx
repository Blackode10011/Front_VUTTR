import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTools, handleAddTool } from '../../actions/tools'; 

import Topbar from '../Topbar';
import AddTool from '../AddTool';

import './Main.scss';
import AddIcon from '../../assets/icons/plus.svg';
import CloseIcon from '../../assets/icons/cancel.svg';
import SearchIcon from '../../assets/icons/Icon-Search-2px.svg';

function Main() {
	const dispatch = useDispatch();
	const token = useSelector(state => state.authorization.token);
	const tools = useSelector(state => state.tools.tools);
	const showAddTool = useSelector(state => state.tools.showAddTool);

	console.log(showAddTool)
	useEffect(() => {
		
		dispatch(getAllTools(token));

	},[dispatch, token]);


	return (
		<div className='container'>
			<Topbar/>
			{ showAddTool && <AddTool/> }
			<div className='Main'>
				<header className='Main_header'>
					<div className='Main_header--search'>
						<img src={SearchIcon} alt='SearchIcon' className='Main_header--searchImg'/>
						<input 
							type='text'
							placeholder='Search'
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
				
				{tools.map((card, index) => {
					return(
						<section key={index} className='Main_card' >	
							<nav className='Main_card--header'>
								<div className='Main_card--title'>{card.title}</div>
								<img src={CloseIcon} alt='CloseIcon' />
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