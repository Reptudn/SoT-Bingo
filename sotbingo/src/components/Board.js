import React, { Component } from 'react';
import Field from './Field';
import { Toast } from 'primereact/toast';
import './Board.css'

export default class Board extends Component {
	
	constructor(props) {
		super(props);
		this.toast = React.createRef();
		this.fillFields = this.fillFields.bind(this);
		this.isQuestAlreadyOnField = this.isQuestAlreadyOnField.bind(this);
		this.getRandomQuestion = this.getRandomQuestion.bind(this);
	}

	isQuestAlreadyOnField(fields, field) {
		for (let i = 0; i < fields.length; i++) {
			if (fields[i] === field) {
				return true;
			}
		}
		return false;
	}

	showError = () => {
		this.toast.current.show({severity:'error', summary: 'Error', detail: 'Too many attempts to create board. Please reload the page.'});
	}

	getRandomQuest = (quests) => {
		let random = Math.floor(Math.random() * quests.length);
		return quests[random];
	}

	fillFields(quests) {
		for (let i = 0; i < 25; i++) {
			let quest;
			let attempts = 0;
			do {
				quest = this.getRandomQuest(quests);
				attempts++;
				if (attempts > 50)
				{
					this.showError();
					return;
				}
				console.log(attempts);
			} while (this.isQuestAlreadyOnField(this.fields, quest));
			this.fields[i] = quest;
		}
	}

	render () {

		const { quests } = this.props;

		var fields = new Array(25);

		this.fillFields(quests);

		return (
			<div className="board">
				<Toast ref={this.toast}/>
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