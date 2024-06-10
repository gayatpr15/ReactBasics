import React from 'react';

const SearchBox = ({searchChange}) => {

	return(
		<div >
			<input 
				className='bg-lightest-blue pa3 ba b--green'
				type='SearchBox' 
				placeholder='Search Robots'
				onChange={searchChange}/>
		</div>
		);
}
export default SearchBox;