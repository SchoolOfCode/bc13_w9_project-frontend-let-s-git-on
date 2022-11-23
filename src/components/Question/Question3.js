import React from "react";
import './Question.css';

export default function Question3({handleAnswer, handleNextQuestion}) {
    return (
        <div id='3'>
        <h2>What is something you don't get the hype over?</h2>
        
        <button onClick={handleAnswer} id='13' className="firstThreeBtn">React</button>
        <button onClick={handleAnswer} id='14' className="firstThreeBtn">JavaScript</button>
        <button onClick={handleAnswer} id='15' className="firstThreeBtn">SQL</button>
        <button onClick={handleAnswer} id='16' className="SecondThreeBtn">Testing</button>
        <button onClick={handleAnswer} id='17' className="SecondThreeBtn">CSS</button>
        <button onClick={handleAnswer} id='18' className="SecondThreeBtn">UX/UI</button>

        <button onClick={handleNextQuestion} className="nextBtn">next</button>
        </div>
    )
}