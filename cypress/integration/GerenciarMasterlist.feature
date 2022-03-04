@Login
Feature: Gerenciar Masterlist
        Eu sou um usuário e validar funcionalidades da tela Masterlist
        
    Scenario: Validar Elementos da tela Masterlist
    Given que estou logado
    When visualizo tela de Masterlist
    Then é exibido elementos da tela

    Scenario: Validar modal History
    Given que estou na tela Masterlist
    When clico em History
    Then é exibido tabela de alterações da Masterlist

    Scenario: Validar Tela Performance Standard
    Given que estou na tela Masterlist
    When clico em description
    Then é exibido lista de Performance Standards

    Scenario: Validar Tela Edição de Performance Standard
    Given que estou na tela Masterlist
    When clico em edite
    Then realizo edição da tela