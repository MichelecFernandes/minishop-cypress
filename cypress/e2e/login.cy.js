describe('Testes de login do MiniShop', () =>{
  
  beforeEach('Acessar a url', () =>{
    cy.visit('./html/index.html')
    cy.fixture('users').its('usuarioValido').as('usuarioValido')
    cy.fixture('users').its('usuarioInvalido').as('usuarioInvalido')
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
    cy.get('@usuarioInvalido').then((usuario) =>{
      cy.login(usuario)
    })
    // Asserção
    cy.get('div[role=alert').should('be.visible')
  })

  it('Login com dados corretos', () => {
    //cy.fixture('users').its('usuarioValido').as('usuarioValido')
    cy.get('@usuarioValido').then((usuario) =>{
      cy.login(usuario)
    })
    // Asserção
    cy.contains('button', 'Sair').should('exist');
    cy.title().should('be.eq', 'MiniShop - Home')


  })


})