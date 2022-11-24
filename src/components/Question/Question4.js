import React from "react";
import './Question4.css';
import images from '../../images/red.png';

export default function Question4({handleAnswer, handleNextQuestion}) {
    return (
        <div id='4' className="question">
        <h2 className="Q4">Pick a super power but there might be a twist!</h2>
        
        <button onClick={handleAnswer} id='19' className="Q4firstThreeBtn">Invisability but you smell like sewage</button>
        <button onClick={handleAnswer} id='20' className="Q4firstThreeBtn">Flying but you constanly need the loo</button>
        <button onClick={handleAnswer} id='21' className="Q4firstThreeBtn">Super strength but you are also super sticky</button>
        <button onClick={handleAnswer} id='22' className="Q4SecondThreeBtn">X-ray vision but you loose your clothes when you use it</button>
        <button onClick={handleAnswer} id='23' className="Q4SecondThreeBtn">Super stretchy but you are also super slimy</button>
        <button onClick={handleAnswer} id='24' className="Q4SecondThreeBtn">Shape shifter but you can only turn into bugs</button>

        <button onClick={handleNextQuestion} className="nextBtn">next</button>
        <img src= {images} className='red'alt='redSmile'/>
        <img src= {images} className='red2'alt='redSmile'/>
        </div>
    )
}



