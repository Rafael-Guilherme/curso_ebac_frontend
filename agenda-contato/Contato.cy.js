/// <reference types="cypress" />

describe('Testes para adicionar, editar e remover contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar novo contato', () => {
        cy.get('input[type="text"]').type('Rafael Guilherme')
        cy.get('input[type="email"]').type('rafael@email.com')
        cy.get('input[type="tel"]').type('21 75684989')
        cy.get('.adicionar').click()

        cy.get('.sc-dmqHEX').should('have.length', (1))
        
        cy.screenshot('contato-adicionado')
    })


    it('Deve editar o contato', () => {
        cy.get('.edit').click()
        cy.get('input[type="text"]').clear().type('Roberto Guilherme')
        cy.get('input[type="email"]').clear().type('roberto@email.com')
        cy.get('input[type="tel"]').clear().type('11 874589340')
        cy.get('.alterar').click()
        
        cy.screenshot('contato-alterado')
    })
    

    it('Deve remover o contato', () => {
        cy.get('.delete').click()
        cy.get('.sc-dmqHEX').should('have.length', (0))
        
        cy.screenshot('contato-deletado')
    })

})