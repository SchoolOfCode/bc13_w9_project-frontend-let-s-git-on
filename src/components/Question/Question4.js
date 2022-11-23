import React from "react";
import './Question.css';

export default function Question4({handleAnswer, handleNextQuestion}) {
    return (
        <div id='4'>
        <h2>Pick a super power but there might be a twist!</h2>
        
        <button onClick={handleAnswer} id='19' className="firstThreeBtn">Invisability but you smell like a sewage</button>
        <button onClick={handleAnswer} id='20' className="firstThreeBtn">Flying but you constanly need the loo</button>
        <button onClick={handleAnswer} id='21' className="firstThreeBtn">Super strength but super sticky also</button>
        <button onClick={handleAnswer} id='22' className="SecondThreeBtn">X-ray vision but you loose your clothes when you use it</button>
        <button onClick={handleAnswer} id='23' className="SecondThreeBtn">Super stretchy but super slimy also</button>
        <button onClick={handleAnswer} id='24' className="SecondThreeBtn">Shape shifter but you only turn into bugs</button>

        <button onClick={handleNextQuestion} className="nextBtn">next</button>
        </div>
    )
}