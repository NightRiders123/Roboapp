import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
	return(
		<input
			type='search' 
			placeholder='Search Robo'
			className='pa3 ma3 ba b--green bg-lightest-blue br3 shadow-5 animated fadeIn'
			id='SearchBox'
			onChange={searchChange}
			 />
		)
}

export default SearchBox;


