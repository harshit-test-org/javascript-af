describe('Example for cypress', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
  it('should visit homepage', () => {
    cy.visit('/');
  });
  it('should use cypress-testing-library', () => {
    cy.visit('/').getByTestId('for-test');
  });
});
