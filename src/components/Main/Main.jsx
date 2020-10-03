import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTools, handleDeleteTool} from '../../actions/tools'; 

import Topbar from '../Topbar';
import Loading from '../Loading';
import SearchTool from '../SearchTool';
import AddTool from '../AddTool';
import DeleteTool from '../DeleteTool';

import './Main.scss';
import CloseIcon from '../../assets/icons/cancel.svg';

function Main() {
	const dispatch = useDispatch();
	const token = useSelector(state => state.authorization.token);
	const tools = useSelector(state => state.tools.tools);
	const showAddTool = useSelector(state => state.tools.showAddTool);
	const showDeleteTool = useSelector(state => state.tools.showDeleteTool);

	useEffect(() => {
		dispatch(getAllTools(token));
	},[dispatch, token]);

	return (
		<div className='container'>
			<Topbar/>
			{ showAddTool && <AddTool token={token}/>	}
			{!tools.length ? (
				<Loading/>
			) : (
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
										onClick={() => dispatch(handleDeleteTool())}	
									/>
								</nav>
								{ showDeleteTool && <DeleteTool token={token} card={card}/> }
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