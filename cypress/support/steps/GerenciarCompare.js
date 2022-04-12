import GerenciarCompare, { TelaCompare } from '../pageobjects/GerenciarCompare'
import FazerLogin, { TelaLogin } from '../pageobjects/FazerLogin'

Given(/^que estou logado$/, () => {
	TelaLogin.AcessarTelaLogin()
    TelaLogin.ValidarLogin()
});

When(/^clico no icone Compare$/, () => {
	TelaCompare.ClicoNoIconeCompare()
});

Then(/^valido modal Compare$/, () => {
	TelaCompare.ValidoModalCompare()
});
