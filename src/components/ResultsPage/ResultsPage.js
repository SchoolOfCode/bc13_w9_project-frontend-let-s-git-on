//this component will need to handle 3 states:
//one for storing the main person's answers after they have been GET requested within useEffect
//one for storing the list of second player's so far from the table (again GET request within useEffect) 
//the above will enable the user to select who they played against
//and third state will be for the seecond player's answers

//Main person component will be rendered here with the main person's answers state dropped in as props and the nickname state from APP dropped in as props
// SecondPerson component will be rendered here with the list of other players state passed in, and then with a function passed into it that is written within Results which will mean when a player is selected from Second People's drop down list a GET request for their answers and nickname is sent, the result of the get request will also need to be passed in as props
// Matches component will be rendered here with the data from both people's answers and some kind of function to get a match percentage
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
        <DisplayCard userState = {userState} userNickname = {userNickname} userNumber = {userNumber}/>
            {/* <ol>
                <li>{userState[0].question}<strong> {userState[0].choices}</strong></li>
                <li>{userState[1].question}<strong> {userState[1].choices}</strong></li>
                <li>{userState[2].question}<strong> {userState[2].choices}</strong></li>
                <li>{userState[3].question}<strong> {userState[3].choices}</strong></li>
                <li>{userState[4].question}<strong> {userState[4].choices}</strong></li>
            </ol> */}
        </div>
        <div id="player 2">
            <h3>player 2 here
            <input id='p2Input'></input> <button onClick ={()=>{handleP2()}}>Compare results</button></h3>
            <div>{ p2State[0].question} {p2State[0].choices}</div>


        </div>
    </div>
 )
}