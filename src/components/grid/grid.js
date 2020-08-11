import React, { useState, useEffect } from 'react';

import Card from '../card/card';

const Grid = ({}) => {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch('https://api.themoviedb.org/3/movie/popular?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&page=1')
			.then(res => res.json())
			.then(res => setMovies(res.results))
			.catch((e) => console.error(e))
	}, [])

	console.log('movies => ', movies);

	return (
		<section className="container list">
			<div className="row">
				{
					movies.map(movie => (
						<Card
							image="https://m.media-amazon.com/images/M/MV5BNzA5MjkwYzMtNGY2MS00YWRjLThkNTktOTNmMzdlZjE3Y2IxXkEyXkFqcGdeQXVyMjkwMzMxODg@._V1_SY1000_CR0,0,680,1000_AL_.jpg"
							title="The Umbrella Academy"
							description="A family of former child heroes, now grown apart, must reunite to continue to protect the world."
						/>
					))
				}


			</div>
		</section>
	);
};

export default Grid;
