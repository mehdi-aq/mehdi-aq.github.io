import React from 'react';

export default class Projet extends React.Component {
	render() {
		return (
			<a className="projet" href={this.props.link}>
				<h1>{this.props.title}</h1>
				<p>{this.props.description}</p>
				<img src={this.props.imageURL} />
			</a>
		)
	}
}
