import "./DisplayCard.css"
import React from 'react'
import ListItem from '../ListItem/ListItem.js'

export default function DisplayCard ({userNickname, userNumber, userState}){
return(
    <div className = "displayCard">
    <h1>Hello {userNickname}</h1>
    <h2> Your ID is: {userNumber}</h2>
    {userState.map((x)=>{
    return <ListItem questions= {x.question} choices = {x.choices}/>})}
    <p><i>Your personal ID is {userNumber}, anyone you play with will need to know this number to compare your results.</i></p>
    </div>)
}