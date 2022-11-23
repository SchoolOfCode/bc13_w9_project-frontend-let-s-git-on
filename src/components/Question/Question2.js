import React from "react";
import './Question.css';

export default function Question2() {
    return (
        <div>
        <h2>Which would you consider so overrated ?</h2>
    
        <button className="optionBtn">Social Media</button>
        <button className="optionBtn">Dogs and Cats</button>
        <button className="optionBtn">Chocolate(move along pick something else)</button>
        <button className="optionBtn">Capital Cities</button>
        <button className="optionBtn">Netflix</button>
        <button className="optionBtn">Anime</button>
    
        <button className="nextBtn">next</button>
        </div>
    )
}