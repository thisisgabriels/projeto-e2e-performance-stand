import GerenciarTemplates, { TelaTemplates } from '../pageobjects/GerenciarTemplates'
import FazerLogin, { TelaLogin } from '../pageobjects/FazerLogin'

Given(/^que estou logado$/, () => {
	TelaLogin.AcessarTelaLogin()
    TelaLogin.ValidarLogin()
});

When(/^clico no ícone Templates and Documents$/, () => {
	TelaTemplates.ClicoNoIconeTemplatesAndDocuments()
});

Then(/^valido tela Templates and Documents$/, () => {
	TelaTemplates.ValidoTelaTemplates()
});

Given(/^que estou na aba Templates$/, () => {
	TelaTemplates.AbaTemplates()
});

When(/^clico no botão New Template$/, () => {
	TelaTemplates.ClicoNoBotaoNewTemplate()
});

Then(/^crio novo template$/, () => {
	TelaTemplates.CrioNovoTemplate()
});

Given(/^que estou na aba Templates$/, () => {
	TelaTemplates.AbaTemplates()
});

When(/^clico no icone Novo Documento$/, () => {
	TelaTemplates.ClicoNoIconeNovoDocumento()
});

Then(/^crio Novo Documento$/, () => {
	TelaTemplates.CrioNovoDocumento()
});

When(/^sou redirecionado para aba Documents$/, () => {
	TelaTemplates.AbaDocuments()
});

Then(/^valido aba Documents$/, () => {
	TelaTemplates.ValidoAbaDocuments()
});
