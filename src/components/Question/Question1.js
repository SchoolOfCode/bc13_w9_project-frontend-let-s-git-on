import React from 'react';
import './Question1.css';
import images from '../../images/bear.png';
import images2 from '../../images/bull.png';
import images3 from '../../images/elephant.png';
import images4 from '../../images/wolf.png';

/**
 * This function component displays a question and its corresponding multiple chioce answers.
 * - each answer choice is a button that will call a handleAnswer function that sends the answer to database.
 * @param {props} - props containing callback functions to be called when button is clicked.
 * @returns renders questions, button (answers), and a button to go to next question.
 */
export default function Question1({ handleNextQuestion, handleAnswer }) {
	return (
		<div id="1" className="question">
			<h2 className="longerQ">
				Imagine you are in a jungle and you have to fight one of these animals
				to get to freedom, which one do you choose?
			</h2>

        <button onClick={handleAnswer} data-cy="1" id='1' className="firstThreeBtn">Gorilla</button>
        <button onClick={handleAnswer} id='2' className="firstThreeBtn">Bear</button>
        <button onClick={handleAnswer} id='3' className="firstThreeBtn">Wolf</button>
        <button onClick={handleAnswer} id='4' className="SecondThreeBtn">Anaconda</button>
        <button onClick={handleAnswer} id='5' className="SecondThreeBtn">Rhino</button>
        <button onClick={handleAnswer} id='6' className="SecondThreeBtn">Kangaroo</button>

			<button onClick={handleNextQuestion} className="nextBtn">
				next
			</button>

			<img src={images} className="bear-image" alt="bear" />
			<img src={images} className="bear-image2" alt="bear" />
			<img src={images} className="bear-image3" alt="bear" />
			<img src={images2} className="bull" alt="bull" />
			<img src={images3} className="elephant" alt="elephant" />
			<img src={images3} className="elephant2" alt="elephant" />
			<img src={images4} className="wolf" alt="wolf" />
		</div>
	);
}
