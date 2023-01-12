
/// <reference types="cypress"/>

describe('Adding new user',()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    
    it('adding new user', () => {
        cy.get('[data-test=Adduser]').click()
        cy.contains("Add new user")
        let newuser="Naveenkumarx"
        cy.get("#name").type(`${newuser}{enter}`)
        cy.contains("User added successfully")
        cy.wait(1000)
            cy.contains(`${newuser}`)
        
    })
    it('Check for already present', () => {
        cy.get('[data-test=Adduser]').click()
        cy.contains("Add new user")
        let newuser="Naveenkumar"
        cy.get("#name").type(`${newuser}{enter}`)
        cy.contains("Name already found")

    })
    
})