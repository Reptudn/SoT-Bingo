import React, { Component } from 'react';
import Field from './Field';
import './Board.css'

export default class Board extends Component {
	
	render () {

		const { quests } = this.props;

		var getRandomQuest = (quests) => {
			let random = Math.floor(Math.random() * quests.length);
			return quests[random];
		}

		var fields = new Array(25);

		function isQuestAlreadyOnField(fields, field) {
			for (let i = 0; i < fields.length; i++) {
				if (fields[i] === field) {
					return true;
				}
			}
			return false;
		}

		function fillFields(quests) {
			for (let i = 0; i < 25; i++) {
				let quest;
				let attempts = 0;
				do {
					quest = getRandomQuest(quests);
					attempts++;
					if (attempts > 50)
					{
						console.log("Too many attempts");
						return;
					}
				} while (isQuestAlreadyOnField(fields, quest));
				fields[i] = quest;
			}
		}

		fillFields(quests);

		return (
			<div className="board">
				{fields.map((field, index) => (
					<Field
						key={index}
						value={field.value}
						task={field.task}
						description={field.description}
						difficulty={field.difficulty}
					/>
				))}
			</div>
		  );
	};
}