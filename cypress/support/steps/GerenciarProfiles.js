import GerenciarProfiles, { TelaProfiles } from '../pageobjects/GerenciarProfiles'
import FazerLogin, { TelaLogin } from '../pageobjects/FazerLogin'

Given(/^que estou logado$/, () => {
	TelaLogin.AcessarTelaLogin()
    TelaLogin.ValidarLogin()
});

When(/^clico no icone Profiles$/, () => {
	TelaProfiles.ClicoNoIconeProfiles()
});

Then(/^valido aba Permissions$/, () => {
	TelaProfiles.ValidoAbaPermissions()
});

When(/^clico na aba Users$/, () => {
	TelaProfiles.ClicoNaAbaUsers()
});

Then(/^valido aba Users$/, () => {
	TelaProfiles.ValidoAbaUsers()
});

When(/^clico no icone no botão Add User$/, () => {
	TelaProfiles.ClicoNoBotaoAddUser()
});

Then(/^crio novo usuário$/, () => {
	TelaProfiles.CrioNovoUsuario()
});
