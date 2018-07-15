import React from 'react';
import 'animate.css';
import './Card.css';

const Card = ({id ,name, email}) => {
	return(
	<div className="tc bg-light-green dib br3 pa1 ma2 bw2 shadow-5 animated fadeInUp" id='card'>
		<img className="grow" alt='John Doe' src={`http://robohash.org/${id}?200x200`} />
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	</div>
	);
}

export default Card;