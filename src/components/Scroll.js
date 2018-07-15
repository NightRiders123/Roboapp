import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div id="MasterDiv">
			<div id='InnerDiv'>
				{props.children}
			</div>
		</div>
		)
}


export default Scroll;