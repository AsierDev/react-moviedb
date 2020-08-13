import React from 'react';

import './button.sass';

const Button = ({ onLoad }) => {
	return (
		<section className="container text-center">
			<button onClick={onLoad} type="button" className="btn btn-primary btn-lg button--load">
				Load more films
			</button>
		</section>
	);
};

export default Button;
