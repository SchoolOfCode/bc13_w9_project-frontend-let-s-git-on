import React from "react";

export default function SelectionMenu({nickname, handleSelection}) {
// renders the choice of game
    return (
        <div>
            <h1>Welcome {nickname}!</h1>
            <h2>Pick your poison...</h2>
            <button id='energiser'>Energiser!</button>
            <button id='ice-melter' onClick={handleSelection}>Ice melting hour!</button>
            <button id='voting'>The voting hour!</button>
        </div>
    )
}