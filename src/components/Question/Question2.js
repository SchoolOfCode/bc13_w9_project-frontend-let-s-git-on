import React from "react";
import './Question.css';

export default function Question2({handleAnswer, handleNextQuestion}) {
    return (
        <div id='2'className="question">
        <h2 className="Q2">Which would you consider so overrated ?</h2>
    
        <button onClick={handleAnswer} id='7' className="Q2firstThreeBtn">Social Media</button>
        <button onClick={handleAnswer} id='8' className="Q2firstThreeBtn">Dogs and Cats</button>
        <button onClick={handleAnswer} id='9' className="Q2firstThreeBtn">Chocolate</button>
        <button onClick={handleAnswer} id='10' className="Q2SecondThreeBtn">Capital Cities</button>
        <button onClick={handleAnswer} id='11' className="Q2SecondThreeBtn">Netflix</button>
        <button onClick={handleAnswer} id='12' className="Q2SecondThreeBtn">Anime</button>
    
        <button onClick={handleNextQuestion} className="nextBtn">next</button>
        </div>
    )
}