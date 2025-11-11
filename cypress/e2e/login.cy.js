describe('Testes de login do MiniShop', () =>{
  
  beforeEach('Acessar a url', () =>{
    cy.visit('./html/index.html');
  })

  it('Verifica o título da aba da ágina', () => {
    cy.title().should('be.eq', 'MiniShop - Login')
  })

  it('Login com campos em branco', () => {
    //cy.get('#username').click().type('Michele')
    cy.get('#username').clear();
    cy.get('#password').clear();
    cy.get('button[type=submit').click();

    // Asserção
    cy.get('div[role=alert').should('be.visible')
  })
  

  it('Login com dados incorretos', () => {
    cy.get('#username').clear().type('Teste');
    cy.get('#password').clear().type('123');
    cy.get('button[type=submit').click();

    // Asserção
    cy.get('div[role=alert').should('be.visible')
  })


})