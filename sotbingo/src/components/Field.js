import React, { Component } from 'react';
import './Field.css';

export default class Field extends Component {
	
	
	render () {

		const { task, description } = this.props;

		return (
			<div className="field">
				<h1>{task}</h1>
			</div>
		);
	};
}