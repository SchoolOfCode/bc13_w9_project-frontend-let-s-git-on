import React from "react";
import './Question.css';

export default function Question2({handleAnswer, handleNextQuestion}) {
    return (
        <div id='2'>
        <h2>Which would you consider so overrated ?</h2>
    
        <button onClick={handleAnswer} id='7' className="optionBtn">Social Media</button>
        <button onClick={handleAnswer} id='8' className="optionBtn">Dogs and Cats</button>
        <button onClick={handleAnswer} id='9' className="optionBtn">Chocolate(move along pick something else)</button>
        <button onClick={handleAnswer} id='10' className="optionBtn">Capital Cities</button>
        <button onClick={handleAnswer} id='11' className="optionBtn">Netflix</button>
        <button onClick={handleAnswer} id='12' className="optionBtn">Anime</button>
    
        <button onClick={handleNextQuestion} className="nextBtn">next</button>
        </div>
    )
}