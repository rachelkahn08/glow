import React, { Component } from 'react';

import PreviewSlider from './PreviewSlider';
import Preview from './Preview';
import './Watch.css';

class Watch extends Component {
	constructor(props) {
		super(props);

		this.changePreview.bind(this);


		const allPreviews = [{
			title: 'titleA',
			src: 'src',
			background: 'red'
		},{
			title: 'titleB',
			src: 'src',
			background: 'green'
		},{
			title: 'titleC',
			src: 'src',
			background: 'blue'
		},];


		this.state = {
			currentPreview: 'default',
			allPreviews: allPreviews,
		}

	}

	changePreview() {
		this.setState({
			currentPreview: this.props.currentPreview,
		})
	}

	render() {
		return(
			<div className="Watch">
				<Preview currentPreview={ this.state.currentPreview } changePreview={ this.changePreview }/>
				<PreviewSlider changePreview = { this.changePreview } allPreviews = { this.state.allPreviews }/>
			</div>
	);}
}

export default Watch;

