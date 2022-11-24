import React from "react";
import './NicknameInput.css';


export default function NicknameInput({userNickname, handleNickname}) {
    //user name input page - this will be the first page to display in our app
 return (
    <div>
        <h2 className="user-input">😸What's your username?</h2>
        <input id='nicknameInput' placeholder="write username here..." type='text'></input>
        <button className="btn" onClick={handleNickname}>Next</button>
        <p>{userNickname}</p>
    </div>
 )
}