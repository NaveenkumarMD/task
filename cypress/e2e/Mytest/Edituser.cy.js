
/// <reference types="cypress"/>

describe('Editing user data',()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    it('Main page rendered properly', () => {
        cy.contains("Users Profile")
    });
    
    it('Opening the modal to view user data', () => {
        cy.get('[data-test=users-list] .user-container')
        .should("have.length",3)
        .first()
        .click()
    });

    it('Editing the data with UG data', () => {
        cy.get('[data-test=users-list] .user-container')
        .should("have.length",3)
        .first()
        .click()
        let userdata={
            name:"Naveenkumaredited",
            email:"naveenedited@gmail.com",
            qualiication:"UG",
            mobile:9715568487,
            password:"Editedpassword"
        }
        cy.get("#name")
        .first()
        .clear()
        .type(`${userdata.name}`)
        cy.get("#email")
        .first()
        .clear()
        .type(`${userdata.email}`)
        cy.get("#qualification")
        .first()
        .click()
        cy.get("#UGqualification")
        .first() 
        .click()
        cy.get("#mobile")
        .first()
        .clear()
        .type(`${userdata.mobile}`)
        cy.get("#password")
        .first()
        .clear()
        .type(`${userdata.password}`)
        cy.get("#submitbtn").should("have.text","SUBMIT")
        .first()
        .click()
        cy.on("window:alert",(txt)=>{
            expect(txt).to.contains(`Done`)
        })
    });
    
    it('Editing the data with PG data', () => {
        cy.get('[data-test=users-list] .user-container')
        .should("have.length",3)
        .eq(1)
        .click()
        let userdata={
            name:"Naveenedited",
            email:"naveenedited@gmail.com",
            qualiication:"PG",
            mobile:9715568487,
            password:"Editedpassword",
            pgcompletionyear:2022,
            pgcollege:"SNS",
            pgproject:"detecting UFO"

        }
        cy.get("[name=name]")
        .eq(1)
        .clear()    
        .type(`${userdata.name}`)
        cy.get("[name=email]")
        .eq(1)
        .clear()
        .type(`${userdata.email}`)
        cy.get("[test-data=qualification]")
        .eq(1)
        .click()
        cy.get("[name=PGqualification]")
        .eq(0)
        .click()
        cy.get("[name=mobile]")
        .eq(1)
        .clear()
        .type(`${userdata.mobile}`)
        cy.get("[name=password]")
        .eq(1)
        .clear()
        .type(`${userdata.password}`)
        cy.get("[test-data=submitbtn]").eq(1).should("have.text","NEXT")
        .click()
        cy.get("[name=pgcompletionyear]")
        .eq(0)
        .clear()
        .type(`${userdata.pgcompletionyear}`)
        cy.get("[name=pgcollege]")
        .eq(0)
        .clear()
        .type(`${userdata.pgcollege}`)
        cy.get("[name=pgproject]")
        .eq(0)
        .clear()
        .type(`${userdata.pgproject}`)
        cy.get("[test-data=pgsubmitbtn]").click() 
        cy.on("window:alert",(txt)=>{
            expect(txt).to.contains(`Done`)
        })
    });
    
    

    
})