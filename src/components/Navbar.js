import React from 'react';
import { NavLink } from 'react-router-dom';

/* Functional Component */

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand navbar-light bg-light">
			<div className="nav navbar-nav">
				<NavLink className="nav-item nav-link" to="/">
					Home
				</NavLink>
				<NavLink className="nav-item nav-link" to="/about">
					About
				</NavLink>
				<NavLink className="nav-item nav-link" to="/contact">
					Contact
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
