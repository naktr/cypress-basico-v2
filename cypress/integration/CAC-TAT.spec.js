/// <reference types="Cypress" />

//Inicio do Switch de Teste onde 'Central de Atendimento ao Cliente TAT' é o nome
describe('Central de Atendimento ao Cliente TAT', function() {

    //O beforeEach força que seja executada essa funcao primeiro
    //O executar o switch, acessa primeiro a funcao cy.visit abaixo ..
    beforeEach (function() {
     cy.visit('./src/index.html') 
    })
    //Verifica  se o titulo da aplicação é igual ao informado na função abaixo
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    //Preenche todos os campos obrigatorios
    it('Preencha os campos obrigatorios e envia o formulario', function() {
        //Pega o campo com o input = firstname e grava o type informado 'Thadeu First'
        cy.get('#firstName').type('Thadeu First')
        //Pega o campo com o input = lastname e grava o type informado 'Thadeu'
        cy.get('#lastName').type('Thadeu')
        //Pega o campo com o input = email e grava o type informado 'thadeu_mestermin@hotmail.com'
        cy.get('#email').type('thadeu_mestermin@hotmail.com')
        //Pega o campo com o input = open-text-area e grava o type informado 'Teste texto'
        cy.get('#open-text-area').type('Teste texto', { delay:0 })
        //Executa a funcao de Click usando a opcao de Contains onde voce pega o Nome do Button como referencia
        cy.contains('button', 'Enviar').click()
        //Executa a funcao de Click usando a opcao de Get onde pega o button[type=submit} como referencia
        cy.get('button[type="submit"]').click()
        
        //Verifica se apos o preenchimento e o click no botao, se foi retornado uma class de Sucesso.
        cy.get('.success').should('be.visible')
    })

    it('Verifica se o campo email e valido', function() {
        cy.get('#firstName').type('Thadeu First')
        cy.get('#lastName').type('Thadeu')
        cy.get('#email').type('thadeu_mestermin@hotmail,com')
        cy.get('#open-text-area').type('Teste texto', { delay:0 })
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('Verifica o campo telefone esta vazio', function() {

        cy.get('#phone')
        .type('asdasd')
        .should('have.value', '')

    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {

        cy.get('#firstName').type('Thadeu First')
        cy.get('#lastName').type('Thadeu')
        cy.get('#email').type('thadeu_mestermin@hotmail.com')
        //cy.get('#phone-checkbox').click()
        cy.get('input[type="checkbox"][value="phone"]').check().should('be.checked')
        cy.get('#phone').type('aaa')
        cy.get('#open-text-area').type('Teste texto', { delay:0 })
        cy.contains('button', 'Enviar').click()
        

        cy.get('.error').should('be.visible')

    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {

        cy.get('#firstName').type('Thadeu First').should('have.value','Thadeu First').clear().should('have.value', '')

        cy.get('#lastName').type('Thadeu Second').should('have.value','Thadeu Second').clear().should('have.value', '')

        cy.get('#email').type('thadeu_mestermin@hotmail.com').should('have.value','thadeu_mestermin@hotmail.com').clear().should('have.value', '')

        cy.get('#phone').type('21979093443').should('have.value','21979093443').clear().should('have.value', '')

        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

    })

it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){

//cy.get('button[type=submit]').click()
cy.contains('button', 'Enviar').click()

cy.get('.error').should('be.visible')

})

it('envia o formuário com sucesso usando um comando customizado', function(){
    cy.fillMandatoryFieldsAndSubmit()
})

it('seleciona um produto (YouTube) por seu valor (value)', function(){
    cy.exselectyoutube()
})

it('seleciona um produto (Mentoria) por seu texto', function(){
    cy.exselectmentoria()
})

it('seleciona um produto (Blog) por seu index', function(){
    cy.exselectblog()

})


it('Marca o Check do Feedback', function(){
    cy.excheck()

})

it('Marca o Radio Ajuda e confirma se foi realmente marcado', function(){
 cy.excheckconfirmaajuda()
})

it('Marca o Radio Elogio e confirma se foi realmente marcado', function(){
cy.excheckconfirmaelogio()
})

it('Marca o Radio Feedback e confirma se foi realmente marcado', function(){
cy.excheckconfirmafeedback()

})

    it('Marca TODOS o Radio e seleciona um por um com Each e Wrap', function(){
    cy.marcatodosradio()
    })

    it('Marca TODOS o CheckBoxs e seleciona um por um com Each e Wrap', function(){
    cy.chkemailtel()
    })

    it('Desmarca TODOS o CheckBoxs e seleciona um por um com Each e Wrap', function(){
     cy.unchkemailtel()
      })

    it('Marca todos os CheckBox e desmarca o ultimo', function(){
    cy.unckeckultimo()
     })

     it('Faz o upload de um arquivo e verifica se o mesmo foi adicionado', function(){
     cy.filesselect()
     })

     it('seleciona um arquivo simulando um drag-and-drop', function(){
    cy.selectdraganddrop()
     })

     it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
     cy.filealias()
     })

     it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
    cy.novabasemclick()
     })

     it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){
     cy.novabacomclick()
      })
  })
  