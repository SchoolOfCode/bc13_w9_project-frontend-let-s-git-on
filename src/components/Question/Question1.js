import React from "react";
import './Question.css';

export default function Question1() {
    return (
        <div>
        <h2 className="longerQ">Imagine you are in a jungle and you have to choose one of these animals to fight to get to freedom which one?</h2>

        <button className="optionBtn">Gorilla</button>
        <button className="optionBtn">Bear</button>
        <button className="optionBtn">Wolf</button>
        <button className="optionBtn">Venomous snake</button>
        <button className="optionBtn">Rhino</button>
        <button className="optionBtn">Kangaroo</button>

        <button className="nextBtn">next</button>
        </div>
    )
}