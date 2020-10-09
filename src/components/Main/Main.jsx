import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleDeleteTool} from '../../actions'; 

import Topbar from '../Topbar';
import Settings from '../Settings';
import Loading from '../Loading';
import SearchTool from '../SearchTool';
import AddTool from '../AddTool';
import DeleteTool from '../DeleteTool';
import Alert from '../Alert';

import './Main.scss';
import CloseIcon from '../../assets/icons/cancel.svg';

function Main(props) {
	const dispatch = useDispatch();
	const showAddTool = useSelector(state => state.tools.showAddTool);
	const showDeleteTool = useSelector(state => state.tools.showDeleteTool);
	const showSuccessfully = useSelector(state => state.tools.successfully);
	const message = useSelector(state => state.tools.message);
	
	return (
		<div className='container'>
			<Topbar/>
			<Settings/>
			{ showAddTool && <AddTool token={props.token}/>	}
			{ showSuccessfully && <Alert message={message}/> }
			{ showDeleteTool && <DeleteTool token={props.token}/> }
			<SearchTool tools={props.tools} token={props.token}/>
			{
			!props.tools.length ? (
				<Loading/>
			):(
			<div className='Main'>
				{props.tools.map((card, index) => {
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