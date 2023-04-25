describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');

    cy.intercept('POST', 'https://api.spacexdata.com/v5/launches/query', {
      fixture: 'launches.json',
    }).as('getLaunches');
  });

  it('should the cards', () => {
    cy.wait('@getLaunches');

    cy.get('[data-testid="card"]').should('have.length', 10);
  });

  it("should show the card's title", () => {
    cy.wait('@getLaunches');

    cy.get('[data-testid="card-title"]').first().should('have.text', 'FalconSat');
  });

  it('should show the launch date in the correct format', () => {
    cy.wait('@getLaunches');

    cy.get('[data-testid="card-date"]').first().should('have.text', 'Launched On: 3/24/2006');
  });

  it("should show the first core's serial number", () => {
    cy.wait('@getLaunches');

    cy.get('[data-testid="card-core"]').first().should('have.text', 'Core: 5e9e289df35918033d3b2623');
  });

  it('should show the payloads', () => {
    cy.wait('@getLaunches');

    cy.get('[data-testid="card-payload-0"]').first().should('have.text', 'Payload: FalconSAT-2');
  });

  it('should show the patch image', () => {
    cy.wait('@getLaunches');

    cy.get('[data-testid="card-image"]')
      .first()
      .should('have.attr', 'src', 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png');
  });

  it('should show if the launch was successful', () => {
    cy.wait('@getLaunches');

    cy.get('[data-testid="card-success"]').first().should('have.text', 'Success: true');
  });
});
