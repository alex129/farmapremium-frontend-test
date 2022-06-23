// https://docs.cypress.io/api/table-of-contents

describe('Sample e2e test', () => {
  it('Visits the app root url', () => {
    cy.visit('/promotions')
    cy.get('h1').should('include.text', 'Promociones vigentes')
  })
})
