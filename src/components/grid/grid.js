import React, { useState, useEffect } from 'react';
import useSearch from '../useSearch';

import Card from '../card/card';

const Grid = ({}) => {
	useEffect(() => {});

	const { movies } = useSearch();

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
