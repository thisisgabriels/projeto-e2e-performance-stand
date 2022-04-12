export const TelaLogin = {
    AcessarTelaLogin(){
        cy.visit('http://zsa-pssa-dev-app03.azurewebsites.net/')
    },
    ValidarLogin(){
        cy.viewport(1440, 900)
        cy.get('.mat-form-field-infix').type('owner@modec.com')
        cy.contains('Login').click()
    },

    TelaMasterlist(){
        cy.get('span > a').should('have.text', 'MasterLists')
    }
}