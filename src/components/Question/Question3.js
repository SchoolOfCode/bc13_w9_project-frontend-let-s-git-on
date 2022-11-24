import React from "react";
import './Question3.css';
import images from '../../images/sad.png';
import images3 from '../../images/neon.png';

export default function Question3({handleAnswer, handleNextQuestion}) {
    return (
        <div id='3' className="question">
        <h2 className="Q3">What is something you don't get the hype over?</h2>
        
        <button onClick={handleAnswer} id='13' className="Q3firstThreeBtn">React</button>
        <button onClick={handleAnswer} id='14' className="Q3firstThreeBtn">JavaScript</button>
        <button onClick={handleAnswer} id='15' className="Q3firstThreeBtn">SQL</button>
        <button onClick={handleAnswer} id='16' className="Q3SecondThreeBtn">Testing</button>
        <button onClick={handleAnswer} id='17' className="Q3SecondThreeBtn">CSS</button>
        <button onClick={handleAnswer} id='18' className="Q3SecondThreeBtn">UX/UI</button>

        <button onClick={handleNextQuestion} className="nextBtn">next</button>
        <img src= {images} className='sadSmile'alt='sadSmile'/>
        <img src= {images} className='sadSmile2'alt='sadSmile'/>
        <img src= {images} className='sadSmile3'alt='sadSmile'/>
        <img src= {images3} className='neonSmile'alt='neonSmile'/>
        <img src= {images3} className='neonSmile2'alt='neonSmile'/>
        <img src= {images3} className='neonSmile3'alt='neonSmile'/>
        </div>
    )
}