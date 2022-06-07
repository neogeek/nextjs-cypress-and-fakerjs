describe('Search', () => {
  it('should search for test', () => {
    cy.visit('https://google.com');

    cy.get('input[name="q"]').type('test');

    cy.get('form[role="search"]').submit();

    cy.url().should('include', 'https://www.google.com/search?q=test');
  });
});
