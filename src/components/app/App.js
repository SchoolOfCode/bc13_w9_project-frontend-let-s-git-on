import './App.css';
import {useState} from 'react';
import NicknameInput from '../NicknameInput/NicknameInput';
import SelectionMenu from '../SelectionMenu/SelectionMenu';


function App() {
  const [nickname, setNickname] = useState('');
  const [selection, setSelection] = useState('')
  
  function handleNickname() {
    let value = document.getElementById("nicknameInput").value
    setNickname(value);
  }

  function handleSelection() {
    setSelection('ice-melter');
  }

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
}

export default App;
