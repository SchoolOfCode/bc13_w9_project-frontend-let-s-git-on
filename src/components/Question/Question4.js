import React from 'react';
import './Question4.css';
import images from '../../images/red.png';

/**
 * This function component displays a question and its corresponding multiple chioce answers.
 * - each answer choice is a button that will call a handleAnswer function that sends the answer to database.
 * @param {props} - props containing callback functions to be called when button is clicked.
 * @returns renders questions, button (answers), and a button to go to next question.
 */
export default function Question4({ handleAnswer, handleNextQuestion }) {
	return (
		<div id="4" className="question">
			<h2 className="Q4">Pick a super power but there might be a twist!</h2>

			<button onClick={handleAnswer} id="19" className="Q4firstThreeBtn">
				Invisability but you smell like sewage
			</button>
			<button onClick={handleAnswer} id="20" className="Q4firstThreeBtn">
				Flying but you constanly need the loo
			</button>
			<button onClick={handleAnswer} id="21" className="Q4firstThreeBtn">
				Super strength but you are also super sticky
			</button>
			<button onClick={handleAnswer} id="22" className="Q4SecondThreeBtn">
				X-ray vision but you loose your clothes when you use it
			</button>
			<button onClick={handleAnswer} id="23" className="Q4SecondThreeBtn">
				Super stretchy but you are also super slimy
			</button>
			<button onClick={handleAnswer} id="24" className="Q4SecondThreeBtn">
				Shape shifter but you can only turn into bugs
			</button>

			<button onClick={handleNextQuestion} className="nextBtn">
				next
			</button>
			<img src={images} className="red" alt="redSmile" />
			<img src={images} className="red2" alt="redSmile" />
		</div>
	);
}
