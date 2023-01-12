/// <reference types="cypress"/>


describe('Home page rendering', () => { 

    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    //clear local storage

    it('Clearing the local storage',()=>{
        cy.clearAllLocalStorage().should(()=>{
            expect(localStorage.getItem("userdata")).to.null
        })
    })

    it('Check for default users',()=>{
        cy.get('[data-test=users-list] .user-container').should('have.length',3)
        cy.contains("Naveenkumar")
        cy.contains("Kumar")
        cy.contains("Naveen")
    })

 })