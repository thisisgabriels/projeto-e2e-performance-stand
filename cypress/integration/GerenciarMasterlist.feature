@Login
Feature: Gerenciar Masterlist
        Eu sou um usuário e validar funcionalidades da tela Masterlist
        
    Scenario: Validar Modal History
    Given que estou logado
    When clico no ícone histórico
    Then valido modal histórico

    Scenario: Validar tela Performance Standard
    When clico no ícone performance standard
    Then valido modal tela performance standard



