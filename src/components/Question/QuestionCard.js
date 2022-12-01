import React from 'react';
import AnsButtonDisplay from '../AnsButtonDisplay/AnsButtonDisplay';

import ImgByQuestion from '../ImageComponent/ImgByQuestion';

import './QuestionCard.css';

//Refactoring plan:
//import all CSS files and assign to a variable.
//use a question specific CSS for each question
//import all images in an array?
//each  question has its own image import?
//perhaps useEffect to render the page for each question
//get question & answers from db (instead of hard coding)
//testing other components
//option to not click next without selection option
//refactor JSDoc comment specifically for React @component

export default function QuestionCard({ handleNextQuestion, handleAnswer }) {
	const ansArr = [
		{
			id: 1,
			text: 'Gorilla',
		},
		{
			id: 2,
			text: 'Bear',
		},
		{
			id: 3,
			text: 'Wolf',
		},
		{
			id: 4,
			text: 'Anaconda',
		},
		{
			id: 5,
			text: 'Rhino',
		},
		{
			id: 6,
			text: 'Kangaroo',
		},
	];

	const question = `Imagine you are in a jungle and you have to fight one of these animals
    to get to freedom, which one do you choose?`;

	return (
		<div id="1" className={'question'}>
			{/*to refactor id and className for div and h2 to be passed on as props. */}
			<h2 className="Q1">{question}</h2>
			<AnsButtonDisplay
				handleAnswer={handleAnswer}
				ansArr={ansArr.slice(0, 3)}
				className="firstThreeBtn"
			/>
			<AnsButtonDisplay
				handleAnswer={handleAnswer}
				ansArr={ansArr.slice(-3)}
				className="SecondThreeBtn"
			/>
			<button onClick={handleNextQuestion} className="nextBtn">
				next
			</button>

			<ImgByQuestion qID={1} />
			{/* to refactor id as prop/state */}
		</div>
	);
}
