import React from "react";
import './Question1.css'
import images from '../../images/bear.png';
import images2 from '../../images/bull.png';
import images3 from '../../images/elephant.png';
import images4 from '../../images/wolf.png';

export default function Question1({handleNextQuestion, handleAnswer}) {
    return (
        <div id='1' className="question">
        <h2 className="longerQ">Imagine you are in a jungle and you have to choose one of these animals to fight to get to freedom which one?</h2>

        <button onClick={handleAnswer} id='1' className="firstThreeBtn">Gorilla</button>
        <button onClick={handleAnswer} id='2' className="firstThreeBtn">Bear</button>
        <button onClick={handleAnswer} id='3' className="firstThreeBtn">Wolf</button>
        <button onClick={handleAnswer} id='4' className="SecondThreeBtn">Anaconda</button>
        <button onClick={handleAnswer} id='5' className="SecondThreeBtn">Rhino</button>
        <button onClick={handleAnswer} id='6' className="SecondThreeBtn">Kangaroo</button>

        <button onClick={handleNextQuestion} className="nextBtn">next</button>

        <img src= {images} className='bear-image'alt='bear'/>
        <img src= {images} className='bear-image2'alt='bear'/>
        <img src= {images} className='bear-image3'alt='bear'/>
        <img src= {images2} className='bull'alt='bull'/>
        <img src= {images3} className='elephant'alt='elephant'/>
        <img src= {images3} className='elephant2'alt='elephant'/>
        <img src= {images4} className='wolf'alt='wolf'/>
        </div>
    )
}