
var board = [5][5]; //defaulting size to 5x5 for now
var quests = [];

class Quest {
	constructor(task, description, difficulty) {
		this.task = task;
		this.description = description;
		this.difficulty = difficulty;
	}
	done = false;
}

fetch('./quests.json')
	.then(response => response.json())
	.then(data => {
		quests = data.map(questData => new Quest(questData.task, questData.description, questData.difficulty));
		console.log(quests);
	})
	.catch(error => console.error('Error fetching quests:', error));

function questAlreadyOnBoard(quest) {
	for (let i = 0; i < quests.length; i++)
		if (quests[i].task == quest.task) return true;
	return false;
}

function getRandomQuest(quests) {
	let quest = quests[Math.floor(Math.random() * quests.length)];
	if (questAlreadyOnBoard(quest)) {
		console.log("Quest already on board, getting another...");
		getRandomQuest(quests);
	} else {
		console.log(quest);
		return quest;
	}
}

function generateBoard(board) {
	for (let i = 0; i < board.length; i++)
		for (let j = 0; j < board[i].length; j++)
			board[i][j] = getRandomQuest(quests);
}

generateBoard(board);