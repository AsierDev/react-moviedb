import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
	const { image, title, description } = props;

	return (
		<div className="card">
			<img className="card-img-top" src={image} alt={title} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<a href="#" className="btn btn-primary">
					Watch film
				</a>
			</div>
		</div>
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
