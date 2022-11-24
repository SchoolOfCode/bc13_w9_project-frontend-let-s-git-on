//import functions from React testing library and Jest
import {render, screen} from '@testing-library/react'
import {test, expect } from '@jest/globals'
import userEvent from "@testing-library/user-event"

//import the component to test
import NicknameInput from "./NicknameInput.js"

//test that typing into the input field works
test("testing input field and button", ()=>{
    //create test props
    const props = {
        userNickname : "testName", 
        handleNickname : jest.fn()
    }

    //render the component
    //pass in props
    render(<NicknameInput userNickname={props.userNickname} handleNickname = {props.handleNickname}/>)

    //select the input field 
    const input = screen.getByRole('textbox');

    //type into the input using userEvent
    userEvent.type(input, "newName");

    //assert that what has been typed in is now in the input
    expect(input).toHaveValue("newName")

//test to check that button function has been called with it is clicked. 
     //select the button 
     const button = screen.getByRole('button');

     //tclick the button
     userEvent.click(button);
 
     //assert that what has been typed in is now in the input
     //expect(props.handleNickname).toHaveBeenCalledWith('newName')
     expect(props.handleNickname).toHaveBeenCalled()
    

})

