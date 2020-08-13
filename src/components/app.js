import React from 'react';

import Header from './header/header';
import Grid from './grid/grid';

import useSearch from './useSearch';

const App = () => {
	const { movies, searchByTitle } = useSearch();

	return (
		<div>
			<Header onSearch={searchByTitle} />
			<Grid movies={movies} />
		</div>
	);
};

export default App;
