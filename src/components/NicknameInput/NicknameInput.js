import React from 'react';
import './NicknameInput.css';

/**
 * A function component that lets player writes their nickname and sends the nickname to database. The function contains:
 * - an input field for nickname
 * - a button to submit the nickname, and calls handleNickname function to sends nickname to db.
 * @param {props} - takes in props userNickname (string) and a handleNickname function
 * @returns renders the input field and the button
 */
export default function NicknameInput({ userNickname, handleNickname }) {
	//user name input page - this will be the first page to display in our app
	return (
		<div>
			<h2 className="user-input">😸What's your username?</h2>
			<input
				id="nicknameInput"
				placeholder="write username here..."
				type="text"></input>
			<button className="btn" onClick={handleNickname}>
				Next
			</button>
			<p>{userNickname}</p>
		</div>
	);
}
