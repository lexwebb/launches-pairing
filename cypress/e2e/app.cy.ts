describe('Home Page', () => {
  describe('when data is loading', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');

      cy.intercept('POST', 'https://api.spacexdata.com/v5/launches/query').as('getLaunches');
    });

    it('should show the loading cards', () => {
      cy.visit('http://localhost:3000/');

      cy.get('[data-testid="card-loading"]').should('have.length', 10);
    });
  });

  describe('when the page and data is loaded', () => {
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

      cy.get('[data-testid="card-date"]').first().should('have.text', '3/24/2006');
    });

    it("should show the first core's serial number", () => {
      cy.wait('@getLaunches');

      cy.get('[data-testid="card-core"]').first().should('have.text', 'Core: 5e9e289df35918033d3b2623');
    });

    it('should show the payloads', () => {
      cy.wait('@getLaunches');

      cy.get('[data-testid="card-payload-0"]').first().should('have.text', 'FalconSAT-2');
    });

    it('should show the patch image', () => {
      cy.wait('@getLaunches');

      cy.get('[data-testid="card-image"]')
        .first()
        .should('have.attr', 'src')
        .then((src) => {
          expect(src).to.contain(encodeURIComponent('https://images2.imgbox.com/94/f2/NN6Ph45r_o.png'));
        });
      //, 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png');
    });

    it('should show if the launch was successful', () => {
      cy.wait('@getLaunches');

      cy.get('[data-testid="card-success"]').first().should('have.text', 'FAILURE');
    });
  });

  describe('when the API returns an error', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');

      cy.intercept('POST', 'https://api.spacexdata.com/v5/launches/query', {
        statusCode: 500,
      }).as('getLaunches');
    });

    it('should show the error message', () => {
      // React-Query will retry 3 times, so we need to wait for the error to show
      cy.get('[data-testid="launches-error"]', { timeout: 10000 }).should('be.visible');

      cy.get('[data-testid="launches-error"]').should('have.text', 'Error loading launches');
    });
  });
});
