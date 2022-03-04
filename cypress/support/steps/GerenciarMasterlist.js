import GerenciarMasterlist, { TelaMasterlist } from '../pageobjects/GerenciarMasterlist'
import FazerLogin, { TelaLogin } from '../pageobjects/FazerLogin'

Given(/^que estou logado$/, () => {
	TelaLogin.AcessarTelaLogin()
    TelaLogin.ValidarLogin()
});

When(/^visualizo tela de Masterlist$/, () => {
	TelaMasterlist.VerificarElementosDaTelaMasterlist()
});

Then(/^é exibido elementos da tela$/, () => {
	return true;
});


Given(/^que estou na tela Masterlist$/, () => {
	return true;
});

When(/^clico em History$/, () => {
	TelaMasterlist.VerificarModalHistory()
});

Then(/^é exibido tabela de alterações da Masterlist$/, () => {
	return true;
});

Given(/^que estou na tela Masterlist$/, () => {
	return true;
});

When(/^clico em description$/, () => {
	TelaMasterlist.VerificarListaDePS()
});

Then(/^é exibido lista de Performance Standards$/, () => {
	return true;
});

// Given(/^que estou na tela Masterlist$/, () => {
// 	return true;
// });

// When(/^clico em edite$/, () => {
// 	TelaMasterlist.VerificarEdicaoPS()
// });

// Then(/^realizo edição da tela$/, () => {
// 	return true;
// });
