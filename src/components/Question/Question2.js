import React from 'react';
import './Question2.css';
import images from '../../images/smile green.png';

/**
 * This function component displays a question and its corresponding multiple chioce answers.
 * - each answer choice is a button that will call a handleAnswer function that sends the answer to database.
 * @param {props} - props containing callback functions to be called when button is clicked.
 * @returns renders questions, button (answers), and a button to go to next question.
 */

export default function Question2({ handleAnswer, handleNextQuestion }) {
	return (
		<div id="2" className="question">
			<h2 className="Q2">Which do you think is most overrated ?</h2>

			<button onClick={handleAnswer} id="7" className="Q2firstThreeBtn">
				Social Media
			</button>
			<button onClick={handleAnswer} id="8" className="Q2firstThreeBtn">
				Dogs and Cats
			</button>
			<button onClick={handleAnswer} id="9" className="Q2firstThreeBtn">
				Chocolate
			</button>
			<button onClick={handleAnswer} id="10" className="Q2SecondThreeBtn">
				Capital Cities
			</button>
			<button onClick={handleAnswer} id="11" className="Q2SecondThreeBtn">
				Netflix
			</button>
			<button onClick={handleAnswer} id="12" className="Q2SecondThreeBtn">
				Anime
			</button>

			<button onClick={handleNextQuestion} className="nextBtn">
				next
			</button>
			<img src={images} className="smilegreen" alt="smilegreen" />
			<img src={images} className="smilegreen2" alt="smilegreen" />
			<img src={images} className="smilegreen3" alt="smilegreen" />
			<img src={images} className="smilegreen5" alt="smilegreen" />
			<img src={images} className="smilegreen6" alt="smilegreen" />
			<img src={images} className="smilegreen7" alt="smilegreen" />
		</div>
	);
}
