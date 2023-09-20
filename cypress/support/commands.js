Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Thadeu First')
    cy.get('#lastName').type('Thadeu')
    cy.get('#email').type('thadeu_mestermin@hotmail.com')
    cy.get('#open-text-area').type('Teste texto', { delay:0 })
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
})

Cypress.Commands.add('exselectyoutube', function(){
    //Seleciona o YouTube pelo Texto
    cy.get('#product').select('YouTube').should('have.value', 'youtube')

})


Cypress.Commands.add('exselectmentoria', function(){
    //Seleciona Mentoria pelo Value
    cy.get('#product').select('mentoria').should('have.value', 'mentoria')

})

Cypress.Commands.add('exselectblog', function(){
    //Seleciona o Blog por Index
    cy.get('#product').select(1).should('have.value', 'blog')

})

Cypress.Commands.add('excheck', function(){
    //Marca o CheckBox FeedBack
    cy.get(':nth-child(4) > input').check().should('have.value', 'feedback')

})

Cypress.Commands.add('excheckconfirmaajuda', function(){
cy.get('input[type="radio"][value="ajuda"]').check().should('be.checked').should('have.value', 'ajuda')
})

Cypress.Commands.add('excheckconfirmaelogio', function(){
cy.get('input[type="radio"][value="elogio"]').check().should('be.checked').should('have.value', 'elogio')
})

Cypress.Commands.add('excheckconfirmafeedback', function(){
 cy.get('input[type="radio"][value="feedback"]').check().should('be.checked').should('have.value', 'feedback')
})

Cypress.Commands.add('marcatodosradio', function(){
cy.get('input[type="radio"]').should('have.length', 3).each(function($radio) {
    cy.wrap($radio).check()
    cy.wrap($radio).should('be.checked')
  })
})

Cypress.Commands.add('chkemailtel', function(){
    cy.get('input[type="checkbox"]').check().should('have.length', 2).each(function($checkbox) {
        cy.wrap($checkbox).check()
        cy.wrap($checkbox).should('be.checked')
    
    })
  })

  Cypress.Commands.add('unchkemailtel', function(){
cy.get('input[type="checkbox"]').should('have.length', 2).each(function($unscheck){
    //Marca o CheckBox
cy.wrap($unscheck).check()
    //Valida se foi marcado
cy.wrap($unscheck).should('be.checked')
    //Desmarca o CheckBox
cy.wrap($unscheck).uncheck()
    //Verifica se foi desmarcado
cy.wrap($unscheck).should('not.be.checked')
})
  })

  Cypress.Commands.add('unckeckultimo', function(){

    cy.get('input[type="checkbox"]').check().should('be.checked').last().uncheck().should('not.be.checked')
  })
  

  Cypress.Commands.add('filesselect', function(){
    cy.get('input[type="file"]').should('not.have.value').selectFile('./cypress/fixtures/example.json')
    .should(function($input){
    expect ($input[0].files[0].name).to.equal('example.json')
    })

  })

  Cypress.Commands.add('selectdraganddrop', function(){
    cy.get('input[type="file"]').should('not.have.value').selectFile('./cypress/fixtures/example.json', {action : "drag-drop"})
    .should(function($input){
    expect ($input[0].files[0].name).to.equal('example.json')
    }) 
  })

  Cypress.Commands.add('filealias', function(){
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]').should('not.have.value').selectFile('@sampleFile', {action : "drag-drop"})
    .should(function($input){
    expect ($input[0].files[0].name).to.equal('example.json')
    }) 
  })

//Verifica se a pagina vai abrir em uma outra aba antes de clicar no link
  Cypress.Commands.add('novabasemclick', function(){
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
  })
//Remove a opcao de target (_blank) que faz abrir a pagina em outra aba
  Cypress.Commands.add('novabacomclick', function(){
    cy.get('#privacy a').invoke('removeAttr', 'target').click()
  })