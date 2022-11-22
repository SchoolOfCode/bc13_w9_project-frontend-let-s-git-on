import React from "react";

export default function NicknameInput({userNickname, handleChange}) {
 return (
    <div>
        <h2>What's your username?</h2>
        <input id='nicknameInput' type='text'></input>
        <button onClick={handleChange}>Next</button>
        <p>{userNickname}</p>
    </div>
 )
}