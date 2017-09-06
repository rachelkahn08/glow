import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharactersNav from './CharactersNav';

class Characters extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
				CHARACTERS WOO
				<CharactersNav />
			</div>

	);}
}

export default Characters;