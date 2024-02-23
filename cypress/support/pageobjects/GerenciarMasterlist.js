export const TelaMasterlist = {
    
    ClicoNoIconeIconeHistory(){
        cy.get(':nth-child(1) > .mat-card-actions > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
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

    ClicoEmArchived(){
        cy.contains('Archived').click()
    },
    ValidoAbaArchived(){
        cy.contains('Title')
        cy.contains('2500 Rev')
        cy.contains('Sys Ver')	
        cy.contains('Status')
        cy.contains('Published')
        cy.contains('Last Modified')
        cy.contains('Actions')
		
        cy.contains('history').click({force:true})
        
        cy.contains('Date')
        cy.contains('User')
        cy.contains('Operation')
        cy.contains('Description')
        cy.contains('Status')

        cy.get('.span-col-4 > app-button > .mat-focus-indicator > .mat-button-wrapper').click()

        cy.contains('description').click({force:true})
        // cy.contains('visibility').click({force:true})
        // cy.wait(3000)
        // cy.contains('CANCEL').click()
        //descomentar quando o ajuste ser feito
    },

    ClicoNoIconeIconeVisualizarPerformanceStandard(){
        cy.get(':nth-child(2) > .mat-card-actions > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
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
        cy.get('body > app-root > div > ng-component > div > mat-sidenav-container > mat-sidenav-content > div > app-master-list-layout > app-performance-standard-form > mat-drawer-container > mat-drawer-content > div > div > div:nth-child(2) > form > div:nth-child(1) > mat-card > mat-form-field.mat-form-field.span-col-48.ng-tns-c48-35.mat-accent.mat-form-field-type-mat-input.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-has-label.ng-untouched.ng-pristine.ng-valid.ng-star-inserted.mat-form-field-should-float > div > div.mat-form-field-flex.ng-tns-c48-35 > div.mat-form-field-suffix.ng-tns-c48-35.ng-star-inserted > button > span.mat-button-wrapper > mat-icon').click()
        cy.get('#mat-input-157').type('Teste com cypress')
        cy.contains('send').click()

        //Button History
        cy.get(':nth-child(2) > app-button.opacity > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait(3000)
        cy.get('#mat-input-7').clear()
        cy.get('#mat-input-7').type('Teste com Cypress')
        cy.get(':nth-child(3) > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.swal2-confirm').click()
        
        //Button Markups
        cy.contains('Markups').click()
        cy.wait(2000)
        cy.contains('CANCEL').click()
        cy.contains('CONFIRM').click()
    },

    ClicoNoIconeEdite(){
        cy.get(':nth-child(1) > .mat-card-header > .mat-icon').click()
    },

    EditoMasterlist(){
        cy.get('#mat-input-2').clear({force:true})
        cy.get('#mat-input-2').type('MODEC Singapure Master List')
        cy.get('.mat-dialog-actions > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.swal2-confirm').click()
    }
    
}