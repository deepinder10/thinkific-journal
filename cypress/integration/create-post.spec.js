/// <reference types="cypress" />

describe('Create a post', () => {
  it('should create a post', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Click the Create Post button and open the popup
    cy.get('button[data-testid="create-post-btn"]').click();
    cy.get('input[id="title"]').type('Cypress test post');
    cy.get('textarea[id="content"]').type('Here is my content');

    cy.intercept('POST', 'http://localhost:3000/api/posts').as('createPostAPI');
    cy.get('button[id="postSubmitBtn"]').click();

    // Wait for the API to finish
    cy.wait('@createPostAPI');
  });
});
