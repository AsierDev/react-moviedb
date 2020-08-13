import React from 'react';

import Card from '../card/card';

const Grid = ({ movies }) => {
	return (
		<section className="container list">
			<div className="row">
				{/* Hacemos un mapeo al array de movies para mostrar una card por cada item del array */}
				{movies.map((movie) => (
					<Card image={movie.poster_path} title={movie.title} description={movie.overview} key={movie.id} />
				))}
			</div>
		</section>
	);
};

export default Grid;
