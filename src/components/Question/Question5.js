import React from "react";
import './Question.css';

export default function Question5({handleAnswer, handleNextQuestion}) {
    return (
    <div id='5'>
    <h2>Who would you choose to fight alongside you in a zombie apocolypse?</h2>
    <button onClick={handleAnswer} id='25' className="optionBtn">Liz</button>
    <button onClick={handleAnswer} id='26' className="optionBtn">Arshi</button>
    <button onClick={handleAnswer} id='27' className="optionBtn">Hamza</button>    
    <button onClick={handleAnswer} id='28' className="optionBtn">Jordan</button>
    <button onClick={handleAnswer} id='29' className="optionBtn">Loz</button>
    <button onClick={handleAnswer} id='30' className="optionBtn">Jessica</button>

    <button onClick={handleNextQuestion} className="nextBtn">next</button>
    </div>
    )
}