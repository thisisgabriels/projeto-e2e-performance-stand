@Login
Feature: Gerenciar Templates and Documents
        Eu sou um usuário e validar funcionalidades da tela Templates and Documents

    Scenario: Validar tela Templates and Documents
    Given que estou logado
    When clico no ícone Templates and Documents
    Then valido tela Templates and Documents

    Scenario: Validar criação de Novo template
    Given que estou na aba Templates
    When clico no botão New Template
    Then crio novo template

    Scenario: Validar criação de Novo Documento
    Given que estou na aba Templates
    When clico no icone Novo Documento
    Then crio Novo Documento

    Scenario: Validar tela Documents
    When sou redirecionado para aba Documents
    Then valido aba Documents
