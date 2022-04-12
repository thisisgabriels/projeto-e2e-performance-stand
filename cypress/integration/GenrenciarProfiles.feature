@Login
Feature: Gerenciar Profiles
        Eu sou um usuário e validar funcionalidades da tela Profiles
        
    Scenario: Validar aba Permissions
    Given que estou logado
    When clico no icone Profiles
    Then valido aba Permissions

    Scenario: Validar aba Users
    When clico na aba Users
    Then valido aba Users

    Scenario: Validar criação de novo Usuário
    When clico no icone no botão Add User
    Then crio novo usuário

