export const TelaProject = {

    ClicoNoIconeProjects(){
        cy.get(':nth-child(2) > .mat-list-item-content > .item-menu > .item > .mat-icon').click()
    },

    ValidoTelaProject(){
        cy.contains('My Projects')
        cy.contains('Active')
        cy.contains('Archived')
        cy.contains('Project')
        cy.contains('Masterlist')
        cy.contains('Rev')
        cy.contains('Ver')
        cy.contains('Owner')
        cy.contains('Status')
        cy.contains('Published On')
        cy.contains('Last Modified')
        cy.contains('Actions')
    },
    ClicoNoBotaoNewProject(){
        cy.get('span.span-col-12 > app-button > .mat-focus-indicator > .mat-button-wrapper').click()
    },

    CrioNovoProjeto(){
        cy.get('input[id="mat-input-2"]').type('Novo Projeto de testes000989830c966000',{force:true})
        cy.get('#selectOwnersList > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        cy.contains('Usuário gmail').click()
        cy.get('#selectMembersList > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        cy.get('#mat-option-9 > .mat-pseudo-checkbox').click({force:true})
        cy.get('#mat-checkbox-1 > .mat-checkbox-layout').click({force:true})
        cy.get('.mat-dialog-actions > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click({force:true})

    },
    ClicoNoIconeEdite(){
        cy.get(':nth-child(2) > :nth-child(10) > .actions > :nth-child(1) > .mat-icon').click()
    },

    EditoProject(){
        cy.get('.span-col-8 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').clear()
        cy.get('.span-col-8 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Cypress')
        cy.get('.mat-dialog-actions > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click({force:true})
    },

    ClicoNoIconeHistory(){
        cy.get(':nth-child(2) > :nth-child(10) > .actions > :nth-child(2) > .mat-icon').click()
    },

    ValidoAbaHistory(){
        cy.contains('PROJECT HISTORY')
        cy.contains('Date')
        cy.contains('User')
        cy.contains('Operation')
        cy.contains('Description')
        cy.contains('Status')
        cy.get('.span-col-4 > app-button > .mat-focus-indicator > .mat-button-wrapper').click()
    },
    PreenchoFiltroPesquisa(){
        cy.get('.mat-expansion-panel-header-title').click()
        cy.get('#mat-input-1').type('Cypress')
    },
    ValidoFiltroDePesquisa(){
        cy.contains('search').click()
    },
    VerifiqueTituloProjetos(){
        cy.contains('Projects')
    },
    ClicoNoIconeDetail(){
        cy.get(':nth-child(2) > :nth-child(10) > .actions > :nth-child(3)').click()
        cy.wait(3000)
    },
    ValidoTelaProjectsDetail(){
        //Criação do SCE
        cy.contains('IMPORT SCE').click()
        cy.wait(3000)
        cy.contains('MasterLists').click()
        cy.get('.mat-form-field.ng-tns-c50-53 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-icon').click()
        cy.get('.mat-option-text').click()
        cy.get('#sceIdList > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        cy.get('#mat-option-25 > .mat-option-text').click()
        cy.wait(3000)
        cy.contains('done').click()
        cy.get('.swal2-confirm').click()
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click()

        //Verificar tabela
        cy.contains('SCE ID')
        cy.contains('SCE Category')
        cy.contains('SCE Description')
        cy.contains('Regulations')
        cy.contains('Owner')
        cy.contains('Status')
        cy.contains('Last Modified')
        cy.contains('Actions')

        //Cico no ícone Edit SCE
        cy.get(':nth-child(2) > :nth-child(8) > .actions > :nth-child(2) > .mat-icon').click()
        
        //Add Coments
        cy.get('.span-col-40 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.wait(3000)
        cy.get('#mat-input-496').type('Teste com Cypress')
        cy.contains('send').click()
        
        //Edito SCE
        cy.get('#mat-input-491').clear({force:true})
        cy.get('#mat-input-491').type('Teste com Cyoress')
        cy.get('.margin-right-15 > :nth-child(3) > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.contains('YES').click()
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click()

        //Visualizar Markups
        // cy.contains('Markups').click()
        // cy.wait(3000)

        // //Visualizar History
        // cy.contains('History').click()
        // cy.wait(3000)

        //Delete
        cy.get(':nth-child(3) > :nth-child(8) > .actions > :nth-child(3) > .mat-icon').click()
        cy.get('.swal2-confirm').click()
        cy.wait(5000)

        
    }   
}