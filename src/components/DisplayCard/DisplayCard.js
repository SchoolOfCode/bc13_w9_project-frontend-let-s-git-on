import "./DisplayCard.css"
import React from 'react'
import ListItem from '../ListItem/ListItem.js'

export default function DisplayCard ({userNickname, userState}){
return(
    <div className = "displayCard">
     <p>{userNickname},</p>   
    {userState.map((x)=>{
    return <ListItem questions= {x.question} choices = {x.choices}/>})}
    </div>)
}