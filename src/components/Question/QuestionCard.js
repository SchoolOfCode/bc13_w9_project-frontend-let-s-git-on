import React from 'react';
import AnsButtonDisplay from '../AnsButtonDisplay/AnsButtonDisplay';

import ImgByQuestion from '../ImageComponent/ImgByQuestion';

import './QuestionCard.css';
import Button from '../Button/Button.js';

//Refactoring plan:
//import all CSS files and assign to a variable.
//use a question specific CSS for each question
//import all images in an array?
//create an index.js file in image folder to export all images.
//each  question has its own image import?
//perhaps useEffect to render the page for each question
//get question & answers from db (instead of hard coding)
//testing other components
//option to not click next without selection option
//refactor JSDoc comment specifically for React @component

export default function QuestionCard({
	qid,
	qObj,
	handleNextQuestion,
	handleAnswer,
}) {
	return (
		<div id={qid} className={'question'}>
			<h2 className={`Q${qid}`}>{qObj.question}</h2>
			<AnsButtonDisplay
				handleAnswer={handleAnswer}
				ansArr={qObj.choices.slice(0, 3)}
				className={`Q${qid}firstThreeBtn`}
			/>
			<AnsButtonDisplay
				handleAnswer={handleAnswer}
				ansArr={qObj.choices.slice(-3)}
				className={`Q${qid}SecondThreeBtn`}
			/>
			<Button
				onClick={handleNextQuestion}
				className="nextBtn"
				buttonText="next"
			/>

			<ImgByQuestion qID={qid} />
		</div>
	);
}
