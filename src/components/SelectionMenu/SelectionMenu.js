import React from 'react';
import './SelectionMenu.css';

/**
 * This function displays the different types of games to be played with. it contains:
 * - buttons that represent the game selection. handleSelection function is called when the button is clicked.
 * @param {string} nickname plyer's nickname.
 * @param {function} handleSelection call back function to be called when the button is clicked.
 * @returns renders the game menu bottons
 */
export default function SelectionMenu({ nickname, handleSelection }) {
	// renders the game choosing menu
	return (
		<div id="Selection">
			<h1 id="welcome">Welcome {nickname}😸 !</h1>
			<h2 id="pick-your-poision">Pick your poison...</h2>
			<button id="energiser">ENERGISER HOUR!</button>
			<button id="ice-melter" onClick={handleSelection}>
				ICE MELTING HOUR!
			</button>
			<button id="voting">THE VOTING HOUR!</button>
		</div>
	);
}
