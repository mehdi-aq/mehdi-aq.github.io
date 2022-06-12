import React from 'react';
import './projet.css';

export default class Projet extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	handleMouseEnter(e) {
		const node = this.myRef.current;
		const rect = node.getBoundingClientRect();
		const left = rect.x;
		const position = node.offsetLeft + (rect.width / 2) - e.clientX;
	}

	handleMouseLeave() {
		const node = this.myRef.current;

		node.style.left = '0px';
	}

	render() {
		return (
			<a ref={this.myRef}
				className="projet"
				href={this.props.link}
				onMouseEnter={this.handleMouseEnter.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
			>
				<h1>{this.props.title}</h1>
				<p>{this.props.description}</p>
				<img src={this.props.imageURL} />
			</a>
		)
	}
}
