import React from "react";
import './SelectionMenu.css';

export default function SelectionMenu({nickname, handleSelection}) {
// renders the choice of game

    return (
        <div id="Selection">
            <h1 id="welcome">Welcome {nickname}😸 !</h1>
            <h2 id="pick-your-poision">Pick your poison...</h2>
            <button id='energiser'>ENERGISER HOUR!</button>
            <button id='ice-melter'onClick={handleSelection}>ICE MELTING HOUR!</button>
            <button id='voting'>THE VOTING HOUR!</button>    
        </div>
    )
}