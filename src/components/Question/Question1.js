import React from "react";
import './Question.css';

export default function Question1({handleNextQuestion, handleAnswer}) {
    return (
        <div id='1'>
        <h2 className="longerQ">Imagine you are in a jungle and you have to choose one of these animals to fight to get to freedom which one?</h2>

        <button onClick={handleAnswer} id='1' className="optionBtn">Gorilla</button>
        <button onClick={handleAnswer} id='2' className="optionBtn">Bear</button>
        <button onClick={handleAnswer} id='3' className="optionBtn">Wolf</button>
        <button onClick={handleAnswer} id='4' className="optionBtn">Venomous snake</button>
        <button onClick={handleAnswer} id='5' className="optionBtn">Rhino</button>
        <button onClick={handleAnswer} id='6' className="optionBtn">Kangaroo</button>

        <button onClick={handleNextQuestion} className="nextBtn">next</button>
        </div>
    )
}