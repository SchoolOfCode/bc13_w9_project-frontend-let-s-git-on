import React from "react";
import './Question.css';

export default function Question3() {
    return (
        <div>
        <h2>What is something you don't get the hype over?</h2>
        
        <button className="optionBtn">React</button>
        <button className="optionBtn">JavaScript</button>
        <button className="optionBtn">SQL</button>
        <button className="optionBtn">Testing</button>
        <button className="optionBtn">CSS</button>
        <button className="optionBtn">UX/UI</button>

        <button className="nextBtn">next</button>
        </div>
    )
}