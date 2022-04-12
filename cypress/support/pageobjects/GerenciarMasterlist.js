export const TelaMasterlist = {
    
    ClicoNoIconeIconeHistory(){
        cy.get(':nth-child(1) > .mat-card-actions > .span-col-12 > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    },

    VerificoModalHistory(){
        cy.get('#mat-dialog-title-0').should('have.text', 'MASTERLIST HISTORY')
        cy.contains('Date')
        cy.contains('User')
        cy.contains('Operation')
        cy.contains('Description')
        cy.contains('Status')
        cy.get('.span-col-4 > app-button > .mat-focus-indicator').click()
    },

    ClicoNoIconeIconeVisualizarPerformanceStandard(){
        cy.get(':nth-child(1) > .mat-card-actions > .span-col-12 > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    },

    VerificoTelaPerformanceStandard(){ 
       
        //delete performance standard
        cy.get(':nth-child(3) > :nth-child(7) > .actions > :nth-child(3) > .mat-icon').click()
        cy.get('.swal2-confirm').click()
        //cy.get('.swal2-popup').should('have.text', 'Your work was deleted')
        cy.wait(3000)

        //edit performance standard
        cy.get(':nth-child(2) > :nth-child(7) > .actions > :nth-child(2)').click()
        cy.wait(5000)

        //Add coments
        cy.get('.mat-form-field.ng-tns-c48-61 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > [name="Comments"] > .mat-button-wrapper > .mat-icon').click()
        cy.get('#mat-input-162').type('Teste com cypress')
        cy.contains('send').click()

        //Button History
        cy.get(':nth-child(2) > app-button.opacity > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait(3000)
        cy.get('#mat-input-12').clear()
        cy.get('#mat-input-12').type('Gabriel')
        cy.get(':nth-child(3) > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.swal2-confirm').click()
        
    },
    
}