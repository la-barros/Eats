/// <reference types="cypress" />
var el = require('../support/actions').Cadastro
describe('Home', () => {
    it('Valida home', () => {
        cy.home()
        cy.ValidaHome('Seja um parceiro entregador pela Buger Eats', 'Voltar para home')

    });
});


