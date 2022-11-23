// this component will take in the nickname state as props (from the state 2 levels up in APP) and display it as a header
// this component also needs to show some kind of avatar image underneath the header
//the main person's answers state from the results component above will need to be passed in and displayed on page as a list or paragraph 
import React from "react";

export default function MainPerson({userNickname, userNumber}) {
    //user name input page - this will be the first page to display in our app
 return (
    <div>
        <h2>Nickname: {userNickname} <br></br> Player ID: {userNumber}</h2>
        
    </div>
 )
}