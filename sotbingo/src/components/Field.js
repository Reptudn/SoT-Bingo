import React, { Component } from 'react';
import './Field.css';

export default class Field extends Component {
	
	isDone = false;
	
	render () {

		const { task, description } = this.props;

		return (
			<div className="field" description={description}>
				<h1>{task}</h1>
			</div>
		);
	};
}