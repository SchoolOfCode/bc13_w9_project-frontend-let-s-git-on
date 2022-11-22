import React from "react";

export default function NicknameInput({userNickname, handleNickname}) {
    //user name input page - this will be the first page to display in our app
 return (
    <div>
        <h2>What's your username?</h2>
        <input id='nicknameInput' type='text'></input>
        <button onClick={handleNickname}>Next</button>
        <p>{userNickname}</p>
    </div>
 )
}