/// <reference types="cypress" />


describe('Testing the validation', () => {
   beforeEach(()=>{
    cy.visit("http://localhost:3000")
   }) 
   it('Input validation', () => {
    cy.get('[data-test=users-list] .user-container')
    .should("have.length",3)
    .eq(1)
    .click()
    let userdata={
        name:"Naveenedited",
        namewitherror:"ame",
        email:"naveenedited@gmail.com",
        emailwitherror:"fdwf",
        qualiication:"PG",
        mobile:9715568487,
        mobilewitherror:324,
        password:"Editedpassword",
        passwordwitherror:"234",
        pgcompletionyear:2022,
        pgcompletionyearwitherror:"33",
        pgcollege:"SNS",
        pgproject:"detecting UFO"

    }
    cy.get("[name=name]")
    .eq(1)
    .clear()   
    .type(`${userdata.namewitherror}`)
    cy.get("#name-helper-text")
    .should("have.text","Name should be atleast 4 letters")
    cy.get("[name=name]")
    .eq(1)
    .clear()   
    .type(`${userdata.name}`)
    cy.get("#name-helper-text")
    .should("not.exist")
    cy.get("[name=email]")
    .eq(1)
    .clear()   
    .type(`${userdata.emailwitherror}`)
    cy.get("#email-helper-text")
    .should("have.text","Enter a valid email")
    cy.get("[name=email]")
    .eq(1)
    .clear()   
    .type(`${userdata.email}`)
    cy.get("[test-data=qualification]")
    .eq(1)
    .click()
    cy.get("[name=UGqualification]")
    .eq(0)
    .click()
    cy.get("#email-helper-text")
    .should("not.exist")
    cy.get("[name=mobile]")
    .eq(1)
    .clear()   
    .type(`${userdata.mobilewitherror}`)
    cy.get("#mobile-helper-text")
    .should("have.text","Number should be of 10 digit")
    cy.get("[name=mobile]")
    .eq(1)
    .clear()   
    .type(`${userdata.mobile}`)
    cy.get("#mobile-helper-text")
    .should("not.exist")
    cy.get("[name=password]")
    .eq(1)
    .clear()   
    .type(`${userdata.passwordwitherror}`)
    cy.get("#password-helper-text")
    .should("have.text","Password should be of minimum 8 characters length")
    cy.get("[name=password]")
    .eq(1)
    .clear()   
    .type(`${userdata.password}`)
    cy.get("#password-helper-text")
    .should("not.exist")

    cy.get("[test-data=submitbtn]").eq(1).should("have.text","SUBMIT")
    .click()
    
});
})
