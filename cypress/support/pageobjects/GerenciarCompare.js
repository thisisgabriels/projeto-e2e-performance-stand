export const TelaCompare = {
    ClicoNoIconeCompare(){
        cy.get(':nth-child(4) > .mat-list-item-content > .item-menu > .item > .mat-icon').click()
    },

    ValidoModalCompare(){
        cy.contains('COMPARE PERFORMANCE STANDARD')

        cy.get('.mat-form-field.ng-tns-c48-30 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-icon').click()
        cy.get('#mat-option-16 > .mat-option-text').click()
        cy.wait(2000)

        cy.get('#mat-select-10 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click({force:true})
        cy.get('.mat-option-text').click()
        cy.wait(2000)

        cy.get(':nth-child(2) > app-compare-form > .grid > .mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-icon').click()
        cy.get('#mat-option-28 > .mat-option-text').click()
        cy.wait(2000)

        cy.get('.mat-form-field.ng-tns-c48-34 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix').click()
        cy.get('#mat-option-19 > .mat-option-text').click()
        cy.wait(2000)

        cy.get('#mat-select-14 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        cy.get('.mat-option-text').click()
        cy.wait(2000)

        cy.get('#mat-select-18 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
        cy.get('#mat-option-63 > .mat-option-text').click()
        cy.contains('Compare').click()
        cy.wait(10000)
        cy.contains('Ok').click()
    }
}