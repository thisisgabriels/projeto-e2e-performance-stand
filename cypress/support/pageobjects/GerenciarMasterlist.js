export const TelaMasterlist = {

    VerificarElementosDaTelaMasterlist(){
        cy.get('.row-header > :nth-child(1) > span').should('have.text', 'Title')
        cy.get('.row-header > :nth-child(2) > span').should('have.text', '2500 Rev')
        cy.get('.row-header > :nth-child(3) > span').should('have.text', 'Sys Ver')
        cy.get(':nth-child(4) > span').should('have.text', 'Status')
        cy.get('.row-header > :nth-child(5) > span').should('have.text', 'Published')
        cy.get('.row-header > :nth-child(6) > span').should('have.text', 'Last Modified')
        cy.get('.row-header > :nth-child(7) > span').should('have.text', 'Ps On Going')
        cy.get('.row-header > :nth-child(8) > span').should('have.text', 'Actions')
    },

    VerificarModalHistory(){
        cy.get('.actions > :nth-child(1) > .mat-icon').click()
        cy.get('#mat-dialog-title-0').should('have.text', 'MASTERLIST HISTORY')
        cy.get('app-table.ng-star-inserted > .table-list > .row-header > :nth-child(1) > span').should('have.text', 'Date')
        cy.get('app-table.ng-star-inserted > .table-list > .row-header > :nth-child(2) > span').should('have.text', 'User')
        cy.get('app-table.ng-star-inserted > .table-list > .row-header > :nth-child(3) > span').should('have.text', 'Operation')
        cy.get('app-table.ng-star-inserted > .table-list > .row-header > :nth-child(5) > span').should('have.text', 'Status')
        cy.get('.span-col-4 > app-button > .button-style').click()
    },
    VerificarListaDePS(){
        cy.get(':nth-child(3) > .mat-icon').click()
        cy.get('.row-header > :nth-child(1) > span').should('have.text', 'SCE ID')
        cy.get('.row-header > :nth-child(2) > span').should('have.text', 'SCE Category')
        cy.get('.row-header > :nth-child(3) > span').should('have.text', 'SCE Description')
        cy.get('.row-header > :nth-child(4) > span').should('have.text', 'Regulations')
        cy.get('.row-header > :nth-child(5) > span').should('have.text', 'Status')
        cy.get('.row-header > :nth-child(6) > span').should('have.text', 'Last Modified')
        cy.get('.row-header > :nth-child(7) > span').should('have.text', 'Actions')
        cy.get('.mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon').click()
        cy.get('.mat-paginator-navigation-previous > .mat-button-wrapper > .mat-paginator-icon').click()
    },
    VerificarEdicaoPS(){
        cy.get(':nth-child(2) > :nth-child(7) > .actions > :nth-child(2)').click()
        cy.get('.mat-form-field.ng-tns-c98-35 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('@')
    }
}