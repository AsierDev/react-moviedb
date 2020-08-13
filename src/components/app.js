import React from 'react';

import Header from './header/header';
import Grid from './grid/grid';
import Button from './button/button';

import useSearch from './useSearch';

const App = () => {
	// Obtenemos las variables de estado y las funciones de useSearch para que estén presentes globalmente
	const { movies, page, searchByTitle, loadMoreMovies } = useSearch();

	return (
		<div>
			<Header onSearch={searchByTitle} />
			<Grid movies={movies} />
			<Button onLoad={loadMoreMovies} />
		</div>
	);
};

export default App;
