import './App.css';
import {useState} from 'react';
import NicknameInput from '../NicknameInput/NicknameInput';
import SelectionMenu from '../SelectionMenu/SelectionMenu';
import Question1 from '../Question/Question1';


function App() {
  // all the states we are using so far
  const [nickname, setNickname] = useState('');
  const [selection, setSelection] = useState('');
  const [question, setQuestion] = useState(0);
  
  //pass in props and create a question tag with the text e.g <question text="question here?"/>
  //create a new state here for the questions 
  //Create five different objects with the questions and options

  
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
    setQuestion(question + 1);
  }

  //conditional rendering below to control what is displayed on the page based on states
  if (nickname.length === 0) {
  return (
    <div className="App">
      <NicknameInput userNickname={nickname} handleNickname={handleNickname}/>
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
  else if (nickname.length !== 0 && selection.length !== 0) {
    return (
      <Question1 handleNextQuestion={handleNextQuestion}/>
    )
  }
  else {
    return <p>oh no</p>
  }
}

export default App;
