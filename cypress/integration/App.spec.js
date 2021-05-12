describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the running total', () =>{
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '24')
  })

  it('should show the result of an operation', ()=>{
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3');
  })

  

})