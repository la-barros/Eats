/// <reference types="cypress" />
import 'cypress-file-upload';
import { faker, fakerPT_BR } from '@faker-js/faker'
var el = require('../../support/actions').Cadastro

describe('Cadastro Moto', () => {
    it('Dados', () => {

        cy.Dados('Voltar para home') 
        cy.Endereco()
        cy.MetodoEntrega('Aí Sim...')
        
    });
});

