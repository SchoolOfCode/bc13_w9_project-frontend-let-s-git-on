describe('Lets see if this works',
()=> {

beforeEach(() => {

cy.visit('http://localhost:3001')

})

it('shows the username prompt, and 😸', ()=>{

 cy.get('.user-input').should('have.text', `😸What's your username?`)
    
})

it ('lets us type into the input field and shows our name once the next button is clicked', ()=>{

cy.get ('#nicknameInput').type(`Cypress E2E`)
cy.get (`.btn`).click()
})

})