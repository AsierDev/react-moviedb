import React from 'react';

import Card from '../card/card';

const Grid = () => {
	return (
		<section className="container list">
			<div className="row">
				<article className="col-md-3">
					<Card />
				</article>
				<article className="col-md-3">
					<Card />
				</article>
				<article className="col-md-3">
					<Card />
				</article>
				<article className="col-md-3">
					<Card />
				</article>
			</div>
		</section>
	);
};

export default Grid;
