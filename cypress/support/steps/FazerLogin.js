import FazerLogin, { TelaLogin } from '../pageobjects/FazerLogin'

Given(/^que estou na tela de Login$/, () => {
	TelaLogin.AcessarTelaLogin()
});

When(/^valido login$/, () => {
	TelaLogin.ValidarLogin()
});

Then(/^sou redirecionado para tela de Masterlist$/, () => {
});
