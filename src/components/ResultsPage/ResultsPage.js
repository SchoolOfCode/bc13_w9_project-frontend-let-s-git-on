//this component will need to handle 3 states:
//one for storing the main person's answers after they have been GET requested within useEffect
//one for storing the list of second player's so far from the table (again GET request within useEffect) 
//the above will enable the user to select who they played against
//and third state will be for the seecond player's answers

//Main person component will be rendered here with the main person's answers state dropped in as props and the nickname state from APP dropped in as props
// SecondPerson component will be rendered here with the list of other players state passed in, and then with a function passed into it that is written within Results which will mean when a player is selected from Second People's drop down list a GET request for their answers and nickname is sent, the result of the get request will also need to be passed in as props
// Matches component will be rendered here with the data from both people's answers and some kind of function to get a match percentage