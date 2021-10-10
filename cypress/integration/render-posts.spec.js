/// <reference types="cypress" />

describe('Load posts', () => {
  it('should load the posts and check their length count', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Check if the length of posts is greater than 0, assuming we have entries in the database.
    cy.get('[data-testid="posts-container"]')
      .find('[data-testid="post-div"]')
      .its('length')
      .should('be.gt', 0);
  });
});
