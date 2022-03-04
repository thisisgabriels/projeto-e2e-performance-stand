export const TelaLogin = {
    AcessarTelaLogin(){
        cy.visit('https://zsa-pssa-dev-app01.azurewebsites.net/')
    },
    ValidarLogin(){
        cy.viewport(1440, 900)
        cy.contains('Login').click()

    },
}