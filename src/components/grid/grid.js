import React from 'react';

import Card from '../card/card';

const Grid = () => {
	return (
		<section className="container list">
			<div className="row">
				<article className="col-md-3">
					<Card
						image="https://m.media-amazon.com/images/M/MV5BNzA5MjkwYzMtNGY2MS00YWRjLThkNTktOTNmMzdlZjE3Y2IxXkEyXkFqcGdeQXVyMjkwMzMxODg@._V1_SY1000_CR0,0,680,1000_AL_.jpg"
						name="The Umbrella Academy"
						description="A family of former child heroes, now grown apart, must reunite to continue to protect the world."
					/>
				</article>
				<article className="col-md-3">
					<Card
						image="https://m.media-amazon.com/images/M/MV5BZmY2YzU4NDktODIxYi00YWIyLWIzYTctODBkYzYzZjc0ODdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SY1000_CR0,0,675,1000_AL_.jpg"
						name="Dark"
						description="A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families."
					/>
				</article>
				<article className="col-md-3">
					<Card />
				</article>
				<article className="col-md-3">
					<Card
						image="https://m.media-amazon.com/images/M/MV5BMDllMWRjNWMtM2U3Ny00YjAwLTlhNTgtOThjZTc2YmI2ZmRmXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
						name="Perry Mason"
						description="In booming 1932 Los Angeles, a down-and-out defense attorney takes on the case of a lifetime."
					/>
				</article>
			</div>
		</section>
	);
};

export default Grid;
