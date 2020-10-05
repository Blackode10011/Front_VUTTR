import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleDeleteTool} from '../../actions/tools'; 

import Topbar from '../Topbar';
import Loading from '../Loading';
import SearchTool from '../SearchTool';
import AddTool from '../AddTool';
import DeleteTool from '../DeleteTool';
import Successful from '../Successful';

import './Main.scss';
import CloseIcon from '../../assets/icons/cancel.svg';

function Main({tools, token}) {
	const dispatch = useDispatch();
	const showAddTool = useSelector(state => state.tools.showAddTool);
	const showDeleteTool = useSelector(state => state.tools.showDeleteTool);
	const showSuccessful = useSelector(state => state.tools.successful);
	
	return (
		<div className='container'>
			<Topbar/>
			{ showAddTool && <AddTool token={token}/>	}
			{ showSuccessful && <Successful/> }
			{ showDeleteTool && <DeleteTool token={token}/> }
			{
			!tools.length ? (
				<Loading/>
			):(
			<div className='Main'>
				<SearchTool tools={tools}/>
				{tools.map((card, index) => {
					return(
						<section key={index} className='Main_card' >	
							<nav className='Main_card--header'>
								<div className='Main_card--title'>{card.title}</div>
								<img 
									src={CloseIcon} 
									alt='CloseIcon' 
									onClick={() => dispatch(handleDeleteTool(card))}	
								/>
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
			)}
			
		</div>
	);
};

export default Main;