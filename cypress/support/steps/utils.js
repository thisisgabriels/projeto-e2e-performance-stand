export const utilspage = {
    MassaDeDadosAutomatica(massaDeDados){
        var numero = Math.random() *100
        cy.get(massaDeDados).type('Novo Teste'+numero+''); 
    }
}