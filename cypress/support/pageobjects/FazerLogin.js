export const TelaLogin = {
    AcessarTelaLogin(){
        cy.visit('http://zsa-pssa-dev-app03.azurewebsites.net/')
    },
    ValidarLogin(){
        cy.viewport(1440, 900)
        cy.get('.mat-form-field-infix').type('owner@modec.com')
        cy.get('.horizontal-center > .mat-focus-indicator').click()
    },

    TelaMasterlist(){
        cy.get('span > a').should('have.text', 'MasterLists')
    }
}