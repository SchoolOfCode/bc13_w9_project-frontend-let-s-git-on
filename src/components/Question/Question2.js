import React from "react";
import './Question.css';

export default function Question2({handleAnswer, handleNextQuestion}) {
    return (
        <div id='2'className="question">
        <h2 className="longerQ">Which would you consider so overrated ?</h2>
    
        <button onClick={handleAnswer} id='7' className="firstThreeBtn">Social Media</button>
        <button onClick={handleAnswer} id='8' className="firstThreeBtn">Dogs and Cats</button>
        <button onClick={handleAnswer} id='9' className="firstThreeBtn">Chocolate(move along pick something else)</button>
        <button onClick={handleAnswer} id='10' className="SecondThreeBtn">Capital Cities</button>
        <button onClick={handleAnswer} id='11' className="SecondThreeBtn">Netflix</button>
        <button onClick={handleAnswer} id='12' className="SecondThreeBtn">Anime</button>
    
        <button onClick={handleNextQuestion} className="nextBtn">next</button>
        </div>
    )
}