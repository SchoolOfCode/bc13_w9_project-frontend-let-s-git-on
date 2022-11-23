import React from "react";
import './NicknameInput.css';
// import images from '../../images/bear.png';
// import images2 from '../../images/button.png';
// import images3 from '../../images/red.png';
// import images4 from '../../images/smile emjoi.png';
// import images4 from '../../images/squint.png';
// import images4 from '../../images/neon.png';
// import images7 from '../../images/smile.png';

export default function NicknameInput({userNickname, handleNickname}) {
    //user name input page - this will be the first page to display in our app
 return (
    <div>
        <h2 className="user-input">😸What's your username?</h2>
        <input id='nicknameInput' placeholder="write username here..." type='text'></input>
        <button className="btn" onClick={handleNickname}>Next</button>
        <p>{userNickname}</p>
        {/* <img src= {images} className='bear-image'alt='bear'/>
        <img src= {images} className='bear-image2'alt='bear'/>
        <img src= {images2} className='button'alt='bear'/>
        <img src= {images3} className='red-smile'alt='bear'/>
        <img src= {images4} className='neon'alt='bear'/> */}
    </div>
 )
}