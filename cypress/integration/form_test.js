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
        cy.get('textarea[name="motivation"]').type("I need help writing tests").should("have.value", "I need help writing tests");
    })

    it('should allow user to check the checkbox', () => {
        cy.get('input[type="checkbox"]').check().should("be.checked");
    })
})

describe('tests submit button', () => {

    it('should allow submit button to be clicked if all fields are filled & ToS box is checked', () => {

        //visit the site
        cy.visit('localhost:3000');

        //fill out all fields and check the ToS box
        cy.get('input[name="name"]').type("Gabriel Shapiro");
        cy.get('input[name="email"]').type("kafka@doge.com");
        cy.get('textarea[name="motivation"]').type("I need help writing tests");
        cy.get('input[type="checkbox"]').check();

        //click the submit button
        cy.get('button').click();

        //make sure some info from this user is now displayed
        cy.get('pre').should('contain', 'Gabriel');
    })
})

