import React from "react";
import './Question.css';

//Create an default function named 'Questions' and export it 
//Pass props into that function 
//create a h2 tag with a classname/id of "question" for each of the questions
//The create an ul for each of the options undeneath each question
//Create a button component to show after each question 
//Create a submit button to appear on the last question 


export default function Questions (props){
    return (
        <div>
        <h2>{props.text}</h2>;
        <li>{props.text}{props.children}</li>     
        </div>
    )
}