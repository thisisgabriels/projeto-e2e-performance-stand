@Login
Feature: Gerenciar Project
        Eu sou um usuário e validar funcionalidades da tela Project
        
    Scenario: Validar tela Projects
    Given que estou logado
    When clico no ícone Projects
    Then valido tela Project

    Scenario: Validar criação de New Project
    When clico no botão new Project
    Then crio novo projeto

    Scenario: Validar edição de Project
    When clico no ícone edite
    Then edito novo projeto

    Scenario: Validar histórico Project
    When clico no ícone history
    Then valido aba history

    Scenario: Validar filtro de Pesquisa
    When quando preencho campo
    Then valido filtro de pesquisa

    Scenario: Validar tela Projects Detail
    Given dado que estou na tela Projects
    When clico no ícone Projects Detail
    Then valido tela Projects Detail
