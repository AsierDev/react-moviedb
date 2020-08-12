import React, { useState, useEffect } from 'react';

import Card from '../card/card';

const Grid = ({}) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&page=1'
		)
			.then((res) => res.json())
			.then((res) => setMovies(res.results))
			.catch((e) => console.error(e));
	}, []);

	return (
		<section className="container list">
			<div className="row">
				{movies.map((movie) => (
					<Card image={movie.poster_path} title={movie.title} description={movie.overview} />
				))}
			</div>
		</section>
	);
};

export default Grid;
