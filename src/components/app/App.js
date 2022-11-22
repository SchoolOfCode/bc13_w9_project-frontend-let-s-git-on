import './App.css';
import {useState} from 'react';
import NicknameInput from '../NicknameInput/NicknameInput';

function App() {
  const [nickname, setNickname] = useState('hi');

  function handleChange(e) {
    let value = document.getElementById("nicknameInput").value
    setNickname(value);
  }
  return (
    <div className="App">
      <h1>hi Belle</h1>
      <NicknameInput userNickname={nickname} handleChange={handleChange}/>
    </div>
  );
}

export default App;
