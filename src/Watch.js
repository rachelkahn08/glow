import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Watch extends Component {
	constructor(props) {
		super(props);

		this.changePreview.bind(this);
		
	}

	changePreview() {

	}

	render() {
		<div>
			<Preview currentPreview={ this.state.currentPreview }/>
		</div>
	}
}

export default Watch;