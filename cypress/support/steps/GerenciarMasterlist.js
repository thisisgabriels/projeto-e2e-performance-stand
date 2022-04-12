import GerenciarMasterlist, { TelaMasterlist } from '../pageobjects/GerenciarMasterlist'
import FazerLogin, { TelaLogin } from '../pageobjects/FazerLogin'

Given(/^que estou logado$/, () => {
	TelaLogin.AcessarTelaLogin()
    TelaLogin.ValidarLogin()
});

When(/^clico no ícone histórico$/, () => {
	TelaMasterlist.ClicoNoIconeIconeHistory()
});

Then(/^valido modal histórico$/, () => {
	TelaMasterlist.VerificoModalHistory()
});


When(/^clico no ícone performance standard$/, () => {
	TelaMasterlist.ClicoNoIconeIconeVisualizarPerformanceStandard()
});

Then(/^valido modal tela performance standard$/, () => {
	TelaMasterlist.VerificoTelaPerformanceStandard()
});
