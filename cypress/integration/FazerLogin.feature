@Login
Feature: Fazer Login
        Eu sou um usuáriio e desejo fazer Login
        
    Scenario: Acessar tela Inicial
    Given que estou na tela de Login
    When valido login
    Then sou redirecionado para tela de Masterlist