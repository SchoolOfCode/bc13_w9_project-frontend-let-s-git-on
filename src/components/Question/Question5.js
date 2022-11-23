import React from "react";
import './Question5.css';

export default function Question5({handleAnswer, handleNextQuestion}) {
    return (
    <div id='5' className="question">
    <h2 className="Q5">Who would you choose to fight alongside you in a zombie apocolypse?</h2>
    <button onClick={handleAnswer} id='25' className="Q5firstThreeBtn">Liz</button>
    <button onClick={handleAnswer} id='26' className="Q5firstThreeBtn">Arshi</button>
    <button onClick={handleAnswer} id='27' className="Q5firstThreeBtn">Hamza</button>    
    <button onClick={handleAnswer} id='28' className="Q5SecondThreeBtn">Jordan</button>
    <button onClick={handleAnswer} id='29' className="Q5SecondThreeBtn">Loz</button>
    <button onClick={handleAnswer} id='30' className="Q5SecondThreeBtn">Jessica</button>

    <button onClick={handleNextQuestion} className="nextBtn">next</button>
    </div>
    )
}