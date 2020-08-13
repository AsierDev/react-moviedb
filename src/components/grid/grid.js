import React from 'react';

import Card from '../card/card';

const Grid = ({ movies }) => {
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
