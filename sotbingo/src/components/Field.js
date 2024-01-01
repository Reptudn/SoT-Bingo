import React, { Component } from 'react';

export default class Field extends Component {
	
	
	render () {

		const { value, task, description, difficulty } = this.props;

		return (
			<div className="field">
				<p>{value}</p>
				<h1>{task}</h1>
				<p>{description}</p>
				<p>{difficulty}</p>
			</div>
		);
	};
}