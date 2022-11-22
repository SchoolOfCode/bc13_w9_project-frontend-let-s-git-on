import React from "react";

export default function NicknameInput({userNickname, handleNickname}) {
 return (
    <div>
        <h2>What's your username?</h2>
        <input id='nicknameInput' type='text'></input>
        <button onClick={handleNickname}>Next</button>
        <p>{userNickname}</p>
    </div>
 )
}