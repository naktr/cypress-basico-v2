it('abre em mobile', function(){
cy.visit('./src/privacy.html')
cy.contains('formulário da aplicação CAC TAT').should('be.visible')
})