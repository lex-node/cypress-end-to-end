describe('This is our first test!', () => {
    it('should return true', () => {
        expect(true).to.equal(true);
    })
})

describe('testing our inputs', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    it('should hold the value of the typed name', () => {
        cy.get('input[name="name"]').type("Gabriel Shapiro").should("have.value", "Gabriel Shapiro");
    })

    it('it should hold the value of the typed email', () => {
        cy.get('input[name="email"]').type("kafka@doge.com").should("have.value", "kafka@doge.com");
    })

    it('it should hold the value of the typed help request', () => {
        cy.get('textarea[name="motivation"]').type("I can help writing tests").should("have.value", "I can help writing tests");
    })

    it('should allow user to check the checkbox', () => {
        cy.get('input[type="checkbox"]').check().should("be.checked");
    })
})

describe('tests submit button', () => {

    it('should be enabled and submit if all fields are filled & ToS box is checked', () => {

        //visit the site
        cy.visit('localhost:3000');

        //fill out all fields and check the ToS box
        cy.get('input[name="name"]').type("Gabriel Shapiro");
        cy.get('input[name="email"]').type("kafka@doge.com");
        cy.get('textarea[name="motivation"]').type("I can help writing tests");
        cy.get('input[type="checkbox"]').check();

        //click the submit button
        cy.get('button').click();

        //make sure some info from this user is now displayed
        cy.get('pre').should('contain', 'Gabriel');
    })


    it('should be disabled if email input invalid', () => {

        //visit the site
        cy.visit('localhost:3000');

        //fill out all fields and check the ToS box
        cy.get('input[name="name"]').type("Gabriel Shapiro");
        cy.get('input[name="email"]').type("kafka");
        cy.get('textarea[name="motivation"]').type("I can help writing tests");
        cy.get('input[type="checkbox"]').check();

        //check submit button is disabled
        cy.get('button').should('be.disabled');
    })

    it('should be disabled if email input is empty', () => {

        //visit the site
        cy.visit('localhost:3000');

        //fill out all fields and check the ToS box
        cy.get('input[name="name"]').type("Gabriel Shapiro");
        cy.get('textarea[name="motivation"]').type("I can help writing tests");
        cy.get('input[type="checkbox"]').check();

        //check submit button is disabled
        cy.get('button').should('be.disabled');
    })
})

