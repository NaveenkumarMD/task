/// <reference types="cypress"/>


describe('Testing search container', () => { 

    beforeEach(()=>{
        cy.visit("http://localhost:3000")
        cy.clearLocalStorage()
    })

    //clear local storage

    it('Search ', () => {
        cy.get("[test-data=search-container]")
        .type("naveenkumar")
        cy.get('[data-test=users-list] .user-container').should('have.length',1)
        cy.contains("Naveenkumar")
        cy.get("[test-data=search-container]")
        .clear()
        .type("kumar")
        cy.get('[data-test=users-list] .user-container').should('have.length',2)
        cy.contains("kumar")
        cy.contains("Naveenkumar")
        cy.get("[test-data=search-container]")
        .clear()
        .type("Naveen")
        cy.get('[data-test=users-list] .user-container').should('have.length',2)
        cy.contains("Naveen")
        cy.contains("Naveenkumar")

    });
    

 })