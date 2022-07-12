/* eslint-disable no-undef */
describe('Visit login page', () => {
    beforeEach('application loaded successfully', () => {
     cy.visit('/')
    })
      
    it("Login successfully and displaying different pages", ()=>{
      cy.get('[id="username-id"]').type("Kalyani")
      cy.get('[id="password-id"]').type("Kalyani")
      cy.get('[id="login-button-id"]').click()
      cy.get('[id="about-nav-id"]').click()
      cy.contains("about")
      cy.get('[id="users-nav-id"]').click()
      cy.contains("user")
      cy.get('[id="contact-nav-id"]').click()
      cy.contains("contact")
      cy.get('[id="home-nav-id"]').click()
      cy.contains("home")
    })
  })