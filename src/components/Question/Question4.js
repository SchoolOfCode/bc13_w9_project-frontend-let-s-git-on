import React from "react";
import './Question.css';

export default function Question4({handleAnswer, handleNextQuestion}) {
    return (
        <div id='4'>
        <h2>Pick a super power but there might be a twist!</h2>
        
        <button onClick={handleAnswer} id='19' className="optionBtn">Invisability but you smell like a sewage</button>
        <button onClick={handleAnswer} id='20' className="optionBtn">Flying but you constanly need the loo</button>
        <button onClick={handleAnswer} id='21' className="optionBtn">Super strength but super sticky also</button>
        <button onClick={handleAnswer} id='22' className="optionBtn">X-ray vision but you loose your clothes when you use it</button>
        <button onClick={handleAnswer} id='23' className="optionBtn">Super stretchy but super slimy also</button>
        <button onClick={handleAnswer} id='24' className="optionBtn">Shape shifter but you only turn into bugs</button>

        <button onClick={handleNextQuestion} className="nextBtn">next</button>
        </div>
    )
}