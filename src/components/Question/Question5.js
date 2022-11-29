import React from 'react';
import './Question5.css';
import images from '../../images/button.png';

/**
 * This function component displays a question and its corresponding multiple chioce answers.
 * - each answer choice is a button that will call a handleAnswer function that sends the answer to database.
 * @param {props} - props containing callback functions to be called when button is clicked.
 * @returns renders questions, button (answers), and a button to go to next question.
 */
export default function Question5({ handleAnswer, handleNextQuestion }) {
	return (
		<div id="5" className="question">
			<h2 className="Q5">
				Who would you choose to fight alongside you in a zombie apocolypse?
			</h2>
			<button onClick={handleAnswer} id="25" className="Q5firstThreeBtn">
				Liz
			</button>
			<button onClick={handleAnswer} id="26" className="Q5firstThreeBtn">
				Arshi
			</button>
			<button onClick={handleAnswer} id="27" className="Q5firstThreeBtn">
				Hamza
			</button>
			<button onClick={handleAnswer} id="28" className="Q5SecondThreeBtn">
				Jordan
			</button>
			<button onClick={handleAnswer} id="29" className="Q5SecondThreeBtn">
				Loz
			</button>
			<button onClick={handleAnswer} id="30" className="Q5SecondThreeBtn">
				Jessica
			</button>

			<button onClick={handleNextQuestion} className="nextBtn">
				Submit
			</button>

			<img src={images} className="buttonblue" alt="buttonblue" />
			<img src={images} className="buttonblue2" alt="buttonblue" />
			<img src={images} className="buttonblue3" alt="buttonblue" />
			<img src={images} className="buttonblue4" alt="buttonblue" />
			<img src={images} className="buttonblue5" alt="buttonblue" />
			<img src={images} className="buttonblue6" alt="buttonblue" />
		</div>
	);
}
