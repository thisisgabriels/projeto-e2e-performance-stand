export const TelaTemplates = {
    ClicoNoIconeTemplatesAndDocuments(){
        cy.get(':nth-child(3) > .mat-list-item-content > .item-menu > .item > .mat-icon').click()
    },
    ValidoTelaTemplates(){
        cy.contains('Templates and Documents')
    },

    AbaTemplates(){
        cy.contains('Templates')
    },

    ClicoNoBotaoNewTemplate(){
       cy.get('app-button > .mat-focus-indicator > .mat-button-wrapper').click()
    },
    
    CrioNovoTemplate(){
        cy.get('#mat-input-1').focus().type('Teste00900089019982803930',{force:true})
        cy.get(':nth-child(1) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get(':nth-child(2) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get(':nth-child(3) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get(':nth-child(4) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get(':nth-child(5) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get(':nth-child(6) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get(':nth-child(7) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get(':nth-child(8) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get(':nth-child(9) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get(':nth-child(10) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get(':nth-child(11) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.get('.arrow-container > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.mat-dialog-actions > app-button > .mat-focus-indicator > .mat-button-wrapper').click()
    },

    ClicoNoIconeNovoDocumento(){
        cy.get(':nth-child(2) > :nth-child(3) > .actions > .item-action > .mat-icon').click({force:true})
    },

    CrioNovoDocumento(){
        cy.get('input[id="mat-input-1"]').type('Novo documento de testes', {force:true})
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-container').click()
        cy.wait(3000)
        cy.get('.mat-select-placeholder').click(), {force:true}
        cy.get('#mat-option-0 > .mat-option-text').click()
        cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
        cy.get('.mat-dialog-actions > app-button > .mat-focus-indicator > .mat-button-wrapper').click()
    },

    AbaDocuments(){
        cy.contains('Documents')
    },

    ValidoAbaDocuments(){
        cy.contains('Type')
        cy.contains('DataSource')
        cy.contains('Published')
        cy.contains('Published by')
        cy.contains('Actions')
        
        //Download
        cy.get(':nth-child(2) > :nth-child(6) > .actions > :nth-child(1) > .mat-icon').click()
        cy.get('.swal2-confirm').click()
        
        //Envio de email
        cy.get(':nth-child(2) > :nth-child(6) > .actions > :nth-child(2) > .mat-icon').click()
        cy.wait(3000)
        cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Novo email')
        cy.get(':nth-child(3) > .mat-list-item-content > .mat-pseudo-checkbox').click()
        cy.contains('Send').click()
        cy.get('.swal2-confirm').click()
        cy.get('[mat-dialog-close=""] > .mat-focus-indicator > .mat-button-wrapper').click()

        //Delete
        cy.get(':nth-child(2) > :nth-child(6) > .actions > :nth-child(4) > .mat-icon').click()
        cy.get('.swal2-confirm').click()
    }

}