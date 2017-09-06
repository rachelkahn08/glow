import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './Header.css';
// import Watch from './Watch';

class Header extends Component {
	render() {

	return(
		<div className="Header">
			<div className="social-media-block">
				<figure className="social-media-icon facebook"></figure>
				<figure className="social-media-icon instagram"></figure>
				<figure className="social-media-icon twitter"></figure>
			</div>
			<figure className="glow"></figure>
			<div className="watch-on-netflix">
				<div className="watch-on-netflix__copy">WATCH ON</div>
				<figure className="netflix-logo"></figure>
			</div>
			<BrowserRouter>
				<nav className="navbar">
					<NavLink to="/Watch">VEG OUT</NavLink>
					<NavLink to="/Characters">BODACIOUS BABES</NavLink>
					<NavLink to="/music">SICK BEATS</NavLink>
					<NavLink to="/idk">THEY TRIPPIN'</NavLink>
					<NavLink to="/idk2">WHAT'S YOUR DAMAGE?</NavLink>
				</nav>
			</BrowserRouter>
		</div>
	);}
}

export default Header;