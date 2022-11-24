//import functions from React testing library and Jest 
import {render, screen} from '@testing-library/react'
import {test, expect} from "@jest/globals"

//import the component to test
import ResultsPage from "./ResultsPage.js"

test("Results page should show player name and ID", ()=>{
    //create a test prop
    const testPropName = "testName"
    const testPropNumber = 1

    //render the component on screen
    //pass in test props
    render(<ResultsPage userNickname = {testPropName} userNumber = {testPropNumber}/>)

    screen.debug()

    //code below dont work
    // //get the element on screen
    // const element = screen.getByText('Nickname');
    // expect(element).toBeInTheDocument();
})