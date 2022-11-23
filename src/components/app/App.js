import './App.css';
import {useState, useEffect} from 'react';
import NicknameInput from '../NicknameInput/NicknameInput';
import SelectionMenu from '../SelectionMenu/SelectionMenu';
import Question1 from '../Question/Question1';
import Question2 from '../Question/Question2';
import Question3 from '../Question/Question3';
import Question4 from '../Question/Question4';
import Question5 from '../Question/Question5';

// async function testPlayers() {
// const response = await fetch("http://localhost:3000/api/players"
// )
// const data = await response.json();
// console.log (data)
// }
//  testPlayers()
//here to test fetching at the most basic level



function App() {
  // all the states we are using so far
  const [nickname, setNickname] = useState('');
  const [selection, setSelection] = useState('');
  const [question, setQuestion] = useState(1);

  //pass in props and create a question tag with the text e.g <question text="question here?"/>
  //create a new state here for the questions 
  //Create five different objects with the questions and options

  const [gotdata, setData] = useState('');
// testing out state functionality interacting with fetched API data


useEffect(() => {
  //Runs only on the first render
  async function getPlayers() {

    const response = await fetch("http://localhost:3000/api/players"
    )
    const data = await response.json();
  setData (data)
  console.log (gotdata)
    } 
    getPlayers()

}, []);





  
  // function for when you click on next after typing in a nickname
  function handleNickname() {
    let value = document.getElementById("nicknameInput").value
    //post nickname to localhost backend needed here
    //updates state underneath - we need this even when the localhost request is working as the state controls what is rendered in the app
    setNickname(value);
  }

  // function for when you click on ice melting hour
  function handleSelection() {
    //this state also controls what is rendered in the app, please don't remove
    setSelection('ice-melter');
  }

  function handleNextQuestion() {
    return setQuestion(question + 1);
    //return console.log(question)
  }

  function handleAnswer(e) {
    let answer = e.target.id;
    let questionID = e.target.parentNode.id;
    return console.log(`answer: ${answer} question: ${questionID}`)
  }

  //conditional rendering below to control what is displayed on the page based on states
  if (nickname.length === 0) {
  return (
    <div className="App">
      <NicknameInput userNickname={nickname} handleNickname={handleNickname} testProp={''}/>
    </div>
  );
  }
  else if (nickname.length !== 0 && selection.length === 0) {
    return (
      <div>
      <SelectionMenu nickname={nickname} handleSelection={handleSelection}/>
      <p>{selection}</p>
      </div>
    )
  }
  else if (nickname.length !== 0 && selection.length !== 0 && question === 1) {
    return (
      <Question1 handleAnswer={handleAnswer} handleNextQuestion={handleNextQuestion}/>
    )
  }
  else if (question === 2) {
    return (
      <Question2 handleAnswer={handleAnswer} handleNextQuestion={handleNextQuestion}/>
    )
  }
  else if (question === 3) {
    return (
      <Question3 handleAnswer={handleAnswer} handleNextQuestion={handleNextQuestion}/>
    )
  }
  else if (question === 4) {
    return (
      <Question4 handleAnswer={handleAnswer} handleNextQuestion={handleNextQuestion}/>
    )
  }
  else if (question === 5) {
    return (
      <Question5 handleAnswer={handleAnswer} handleNextQuestion={handleNextQuestion}/>
    )
  }
}

export default App;
