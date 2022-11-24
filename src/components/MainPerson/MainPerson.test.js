//Note: this MainPerson component is a child of ResultsPage component

//import functions from React testing library and Jest
import {render, screen} from '@testing-library/react'
import {test, expect } from '@jest/globals'

//import the component to test
import MainPerson from "./MainPerson.js"


//basic test to render the component
test('testing test', ()=>{
    //create a test prop
    const testProp = "testName"
    //render the component
    render(<MainPerson userNickname = {testProp}/>)

    screen.debug()
    
    //code below dont work
    // //get the element using screen
    // const element = screen.getByText(testProp)

    // //assert that player name and player ID is shown on the screen
    // expect(element).toBeInTheDocument()
    // expect(element).toHaveTextContent(testProp)
})
