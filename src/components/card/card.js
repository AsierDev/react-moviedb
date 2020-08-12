import React from 'react';
import PropTypes from 'prop-types';

import './card.sass';

const Card = ({ image, title, description }) => {
	return (
		<article className="col-md-3">
			<div className="card">
				<a className="card__link">
					<img
						className="card__image card-img-top"
						src="https://image.tmdb.org/t/p/w220_and_h330_face/v0eQLbzT6sWelfApuYsEkYpzufl.jpg"
						alt={title}
					/>
					<div className="card__info card-body">
						<h5 className="card__title card-title">{title}</h5>
						<p className=" card__description card-text">{description}</p>
					</div>
				</a>
			</div>
		</article>
	);
};

Card.defaultProps = {
	image: 'https://images-na.ssl-images-amazon.com/images/I/31yW7R1ccdL._AC_SY400_.jpg',
	title: 'Film Title',
	description: 'Film Description',
};

Card.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};

export default Card;
