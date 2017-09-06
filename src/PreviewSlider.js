import React, { Component } from 'react';
import './PreviewSlider.css';

class PreviewSlider extends Component {
	constructor(props) {
		super(props);

		this.selectPreview.bind(this);
		this.setupPreviewSlider.bind(this);

		this.state = {
			allPreviews: props.allPreviews,
		}
	}

	selectPreview(e) {
		console.log(e.currentTarget.dataset);
	}

	setupPreviewSlider() {
		
	}

	componentWillMount() {
		let allPreviewDivs = [];

		const allPreviews = this.state.allPreviews;

		for (var i = 0; i < allPreviews.length; i++) {
			let title = allPreviews[i].title;
			let src = allPreviews[i].src;
			let background = allPreviews[i].background;
			let nextDivToAdd = 
				(<div key={`item-${i}`} className="singlePreview" style={{background: background}}>
				</div>);
			allPreviewDivs.push(nextDivToAdd);
		}

		this.setState({allPreviewDivs: allPreviewDivs});
	}

	render() {

		const allPreviewDivs = this.state.allPreviewDivs;

		return (
			<div id="previewSliderContainer">
				{ allPreviewDivs }
			</div>
	);}
}

export default PreviewSlider;

//<div onChange={ this.props.changePreview }></div>

