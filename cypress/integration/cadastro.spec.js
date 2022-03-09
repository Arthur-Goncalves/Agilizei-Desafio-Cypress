/// <reference types="cypress"  />

var Chance = require('chance')
var chance = new Chance()


describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro dece ser efetuado', () => {

        cy.visit('http://automationpractice.com/')

        cy.get('.login').click()
        cy.get('title').should('have.text','Login - My Store')
        cy.get('input[name="SubmitCreate"]').should('have.value', 'Create an account')

        cy.get('input[id="email_create"]').type(chance.email())
        cy.get('#SubmitCreate').click()

        cy.get('.page-heading').should('have.text','Create an account')
        cy.get('input[id="id_gender1"]').check()

        cy.get('input[name="customer_firstname"]').type(chance.first())
        cy.get('input[name="customer_lastname"]').type(chance.last())
        cy.get('#passwd').type('Agilizei@22')

        cy.get('select[name="days"]').select('17')
        cy.get('select[name="months"]').select('May')
        cy.get('select[id="years"]').select('2002')

        cy.get('input[id="newsletter"]').check()

        cy.get('input[id="address1"]').type(chance.address())
        cy.get('input[id="city"]').type('Miami')
        cy.get('select[name="id_state"]').select('Florida')
        cy.get('input[id="postcode"]').type('33122')

        cy.get('textarea[id="other"]').type('11999999999')
        cy.get('input[name="phone_mobile"]').type('11999999999')
        cy.get('button[id="submitAccount"]').click()

        cy.get('title').should('have.text','My account - My Store')
        cy.get('span[class="navigation_page"]').should('have.text','My account')
     
    });
});