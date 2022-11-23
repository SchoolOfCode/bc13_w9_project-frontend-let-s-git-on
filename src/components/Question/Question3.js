import React from "react";
import './Question.css';

export default function Question3({handleAnswer, handleNextQuestion}) {
    return (
        <div id='3'>
        <h2>What is something you don't get the hype over?</h2>
        
        <button onClick={handleAnswer} id='13' className="optionBtn">React</button>
        <button onClick={handleAnswer} id='14' className="optionBtn">JavaScript</button>
        <button onClick={handleAnswer} id='15' className="optionBtn">SQL</button>
        <button onClick={handleAnswer} id='16' className="optionBtn">Testing</button>
        <button onClick={handleAnswer} id='17' className="optionBtn">CSS</button>
        <button onClick={handleAnswer} id='18' className="optionBtn">UX/UI</button>

        <button onClick={handleNextQuestion} className="nextBtn">next</button>
        </div>
    )
}