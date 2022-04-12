import GerenciarProjects, { TelaProject } from '../pageobjects/GerenciarProjects'
import FazerLogin, { TelaLogin } from '../pageobjects/FazerLogin'

Given(/^que estou logado$/, () => {
	TelaLogin.AcessarTelaLogin()
    TelaLogin.ValidarLogin()
});

When(/^clico no ícone Projects$/, () => {
	TelaProject.ClicoNoIconeProjects()
});

Then(/^valido tela Project$/, () => {
	TelaProject.ValidoTelaProject()
});

When(/^clico no botão new Project$/, () => {
	TelaProject.ClicoNoBotaoNewProject()
});

Then(/^crio novo projeto$/, () => {
	TelaProject.CrioNovoProjeto()
});

When(/^clico no ícone edite$/, () => {
	TelaProject.ClicoNoIconeEdite()
});

Then(/^edito novo projeto$/, () => {
	TelaProject.EditoProject()
});

When(/^clico no ícone history$/, () => {
	TelaProject.ClicoNoIconeHistory()
});

Then(/^valido aba history$/, () => {
	TelaProject.ValidoAbaHistory()
});

When(/^quando preencho campo$/, () => {
	TelaProject.PreenchoFiltroPesquisa()
});

Then(/^valido filtro de pesquisa$/, () => {
	TelaProject.ValidoFiltroDePesquisa()
});


Given(/^dado que estou na tela Projects$/, () => {
	TelaProject.VerifiqueTituloProjetos()
});

When(/^clico no ícone Projects Detail$/, () => {
	TelaProject.ClicoNoIconeDetail()
});

Then(/^valido tela Projects Detail$/, () => {
	TelaProject.ValidoTelaProjectsDetail()
});

