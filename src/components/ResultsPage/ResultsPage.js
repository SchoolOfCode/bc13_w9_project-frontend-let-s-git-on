import {useState, useEffect} from "react"
import React from "react";
//import MainPerson from "../MainPerson/MainPerson";
import DisplayCard from "../DisplayCard/DisplayCard.js"



export default function ResultsPage({userNickname, userNumber}) {
    const [userState, setUserState] = useState([{},{},{},{},{}])
    const [p2State, setP2State] = useState([{},{},{},{},{}])


console.log (userState)
useEffect(() => {
    // Run! Like go get some data from an API.
    async function getStats () {
        const response = await fetch (`http://localhost:3000/api/players/${userNumber}`)
        let unpackedJson = await response.json()
        setUserState (unpackedJson.payload)
        }
        getStats()
  },[] );

  useEffect( () => {})

  async function sendP2(value) {
    const response = await fetch (`http://localhost:3000/api/players/${value}`)
    let unpackedJson = await response.json()
    console.log (unpackedJson.payload)
    setP2State(unpackedJson.payload)
  }

  function handleP2(){
    let value = document.getElementById('p2Input').value
    sendP2(value)
    } 
  


    //user name input page - this will be the first page to display in our app
 return (
        <div id="resultsPage">
        <div id="playerOne">
        <h1>Hello {userNickname}</h1>
        <h2> Your ID is: {userNumber}</h2>
            <DisplayCard userState = {userState} userNickname = {userNickname}/>
            <p><i>Your personal ID is {userNumber}, anyone you play with will need to know this number to compare your results.</i></p>
        </div>

        <div id="player 2">
            <h3>Write the ID of another player here to see their results:
            <input id='p2Input'></input> <button onClick ={()=>{handleP2()}}>Compare results</button></h3>
            <div>
            <DisplayCard userState = {p2State} userNickname = {p2State[0].nickname}/>
               
                </div>


        </div>
    </div>
 )
}