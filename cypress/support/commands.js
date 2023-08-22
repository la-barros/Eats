import { faker, fakerPT_BR } from '@faker-js/faker'
import 'cypress-file-upload';

var el = require('../support/actions').Cadastro

Cypress.Commands.add('home', () => {

    cy.visit('https://buger-eats.vercel.app/')
    
  })

Cypress.Commands.add('ValidaHome',(mensage, texto) => {

    cy.get('h1').should('be.visible').should('have.text', mensage)

    cy.get(el.btCadastro1).click()
    
    cy.get('a').should('be.visible').should('have.text', texto)
})


Cypress.Commands.add('Dados', (mensage) => {

    cy.visit("https://buger-eats.vercel.app/deliver")

    cy.get('a').should('be.visible').should('have.text', mensage)

    cy.get(el.Nomecompleto).type(faker.person.fullName())
    cy.get(el.cpf).type(faker.string.numeric(11))
    cy.get(el.email).type(faker.internet.exampleEmail())
    cy.get(el.wWhatsapp).type(faker.phone.number('81 9 #### - ####'))
})

Cypress.Commands.add('Endereco', () => {

  
  cy.get(el.Cep).type(54759165)

  cy.get(el.btBuscarCep).click()

  cy.get(el.numero).type(faker.string.numeric(3))

  cy.get(el.complemento).type('Casa A')
})

Cypress.Commands.add('MetodoEntrega', (mensage) => {


  cy.get(el.Moto).click()

  cy.get('input[accept^="image"]').selectFile('imagem/hab1.jpeg', { force: true })

  // cy.contains("button", "Cadastre-se para fazer entregas").click()

  cy.get(el.btCadastrar).click()

  cy.get('h2[class="swal2-title"]').should('be.visible').should('have.text', mensage)
})



