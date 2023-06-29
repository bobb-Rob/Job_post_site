import React from 'react'
import Nav from './nav'

describe('<Nav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Nav />);
  });

  it('should hide the icon on input focus', () => {
    // mount the component under test
    cy.mount(<Nav />);
    // start testing!
    cy.get('[data-cy=work-icon]').should('be.visible')
    cy.get('[data-cy=search]').focus().then(() => {
      expect(cy.get('[data-cy=work-icon]').should('not.exist'))
    });    
  });

  // test that icon appear when input lose focus
  it('Icon should appear once the search input loses focus', () => {
    cy.mount(<Nav />);
  
    cy.get('[data-cy=work-icon]').as('workIcon');
  
    // Assert that the icon is initially visible
    cy.get('@workIcon').should('be.visible');
  
    // Focus on the search input and assert that the icon is not visible
    cy.get('[data-cy=search]').focus().then(() => {
      cy.get('@workIcon').should('not.exist');
    });
  
    // Blur the search input and assert that the icon becomes visible again
    cy.get('[data-cy=search]').blur().then(() => {
      cy.get('@workIcon').should('exist').and('be.visible');
    });
  });  
})