import React, { Component } from 'react';
import Field from './Field';

export default class Board extends Component {
	
	render () {

		const { quests } = this.props;

		return (
			<div className="board">
				{quests.map((field, index) => {
					return (
						<Field
							key={index}
							value={field.value}
							task={field.task}
							description={field.description}
							difficulty={field.difficulty}
						/>
					);
				})}
			</div>
		);
	};
}