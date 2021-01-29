describe('Testing our form inputs', () =>{
  it('Can we navigate to the page', () => {
      cy.visit('http://localhost:3000/pizza')
      cy.url().should('include', 'http://localhost:3000/pizza')

  })

  it('Can the name field be altered', () => {
      cy.get('input[name=name]')
      .type('Jon Han')
      .should('have.value','Jon Han')

  })

  it('Can toppings be selected', () => {
      cy.get('[type="checkbox"]')
      .check()
      .should('be.checked')

  })


  it('Can medium be Selected', () => {
      cy.get('select')
      .select('Medium')
      .should('have.value', 'Medium')

  })

  it('Can you submit the form', () =>{
      cy.contains('Add')
      .click()
  })
});
