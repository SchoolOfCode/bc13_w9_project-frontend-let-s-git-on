
describe('Checking overall page functionality',
()=> {

// beforeEach(() => {

// cy.visit('http://localhost:3001')

// })

it('shows the username prompt, and 😸', ()=>{
    cy.visit('http://localhost:3001')

 cy.get('.user-input').should('have.text', `😸What's your username?`)
})


it ('lets us type into the input field and shows our name once the next button is clicked', ()=>{

cy.get ('#nicknameInput').type(`Cypress E2E`)
cy.get (`.btn`).click()
})

it('goes to the ice-melter page correctly', ()=>{
cy.get (`#ice-melter`).click()
})

it ('displays the first question element correctly', ()=>{

cy.get(`.longerQ`).should(`have.text`, `Imagine you are in a jungle and you have to choose one of these animals to fight to get to freedom which one?`) 
})

it ('has six buttons with options for the first question', ()=>{

cy.get(`#1`).should(`not.have.text`, "")
cy.get(`#2`).should(`not.have.text`, "")
cy.get(`#3`).should(`not.have.text`, "")
cy.get(`#4`).should(`not.have.text`, "")
cy.get(`#5`).should(`not.have.text`, "")
cy.get(`#6`).should(`not.have.text`, "")
})

it ('shows various spinning animals', ()=>{
cy.get(`.bear-image`).should(`have.css`, `-webkit-animation`)

})

it ('select an option and go to the next question',()=>{
cy.get('[data-cy="1"]').click()

})

})