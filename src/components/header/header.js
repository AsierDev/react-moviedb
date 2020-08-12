import React from 'react';

import './header.sass';

import useSearch from '../useSearch';

const Header = () => {
	const { searchByTitle } = useSearch();

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					OMDB React
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item ">
							<a className="nav-link" href="#">
								Profile
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Watch list
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<section className="header__search">
				<div className="container">
					<form className="form">
						<input
							onChange={searchByTitle}
							className="form-control form-control-lg"
							type="text"
							placeholder="Search movie..."
						/>
					</form>
				</div>
			</section>
		</>
	);
};

export default Header;
