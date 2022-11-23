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



//1/Imagine you are in a jungle and you have to choose one of these animals to fight to get to freedom which one?
// gorilla
// bear
// wolf
// venomous snake
// Rhino
// Kangaroo


// 2/Which is so overrated ?
// Social Media
// Dogs and Cats
// Chocolate (move along pick something else)
// Capital Cities
// Netflix
// Anime

// 3/What is something you don't get the hype over?
// React
// JavaScript
// SQL
// Testing
// CSS
// UX/UI

// 4/Pick a super power but there might be a twist!

// -Invisability but you smell like sewage
// -Flying but you constanly need the loo
// -Super strength but super sticky also.
// -X-ray vision but you loose your clothes when you use it
// -Super stretchy but super slimy also
// -Shape shifter but you only turn into bugs

// 5/Who would you choose to fight alongside you in a zombie apocolypse?
// -Liz
// -Arshi
// -Hamza
// -Jordan
// -Loz
// -Jessica