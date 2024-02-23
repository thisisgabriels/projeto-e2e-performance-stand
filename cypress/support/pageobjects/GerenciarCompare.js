export const TelaCompare = {
    ClicoNoIconeCompare(){
        cy.get(':nth-child(4) > .mat-list-item-content > .item-menu > .item > .mat-icon').click()
    },

    ValidoModalCompare(){
        cy.contains('COMPARE PERFORMANCE STANDARD')

        cy.get('.mat-form-field.ng-tns-c50-15 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix').click()
        cy.get('#mat-option-0 > .mat-option-text').click()
        cy.wait(2000)

        cy.get('.mat-form-field.ng-tns-c50-17 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-icon').click({force:true})
        cy.get('#mat-option-5 > .mat-option-text').click()
        cy.wait(2000)

        cy.get(':nth-child(2) > app-compare-form > .grid > .mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-icon').click()
        cy.get('#mat-option-28 > .mat-option-text').click()
        cy.wait(2000)

        cy.get('.mat-form-field.ng-tns-c50-19 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-icon').click()
        cy.get('#mat-option-3 > .mat-option-text').click()
        cy.wait(2000)

        cy.get('.mat-form-field.ng-tns-c50-21 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-icon').click()
        cy.get('#mat-option-50 > .mat-option-text').click()
        cy.wait(2000)

        cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-icon').click()
        cy.get('#mat-option-63 > .mat-option-text').click()
        cy.get('#mat-dialog-0 > app-modal-compare > mat-dialog-actions > app-button:nth-child(4) > button > span.mat-button-wrapper').click({force:true})
        cy.wait(10000)
        cy.contains('Ok').click()
    }
}