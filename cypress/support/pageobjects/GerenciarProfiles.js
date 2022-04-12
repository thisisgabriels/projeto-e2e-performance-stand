export const TelaProfiles = {
    ClicoNoIconeProfiles(){
        cy.get(':nth-child(5) > .mat-list-item-content > .item-menu > .item > .mat-icon').click()
    },

    ValidoAbaPermissions(){
        cy.contains('Permissions')
        cy.contains('Users')
        cy.contains('Member')
        cy.contains('Owner')
        cy.contains('Admin')

        cy.contains('CompareDocument')			
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')	
        cy.contains('Document')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')
        cy.contains('MasterList')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')	
        cy.contains('PerformanceStandards')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')	
        cy.contains('Permission')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')	
        cy.contains('Phase')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')	
        cy.contains('ProjectPerformanceStandards')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')	
        cy.contains('Projects')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')	
        cy.contains('RelevantMHA')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')	
        cy.contains('Template')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')	
        cy.contains('Tracking')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')	
        cy.contains('User')				
        cy.contains('Create')	
        cy.contains('Read')	
        cy.contains('Update')	
        cy.contains('Delete')

    },

    ClicoNaAbaUsers(){
        cy.contains('Users').click()
    },

    ValidoAbaUsers(){
        cy.contains('System Users')
        cy.contains('Users')
        cy.contains('Member')
        cy.contains('Owner')
        cy.contains('Admin')
    },

    ClicoNoBotaoAddUser(){
        cy.get('app-button > .mat-focus-indicator > .mat-button-wrapper').click()
    },

    CrioNovoUsuario(){
        cy.get('#mat-input-6').focus().type('Teste',{force:true})
        cy.get('.mat-form-field.ng-tns-c48-42 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('xenia6970@uorak.com')
        cy.get('.mat-dialog-actions > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
    }
}