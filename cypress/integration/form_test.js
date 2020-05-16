describe('This is our first test!', () => {
    it('should return true', () => {
        expect(true).to.equal(true);
    })
})

describe('testing our form inputs', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    it('should hold the value of the typed name', () => {

        cy.get('input[name="name"]').type("Gabriel Shapiro").should("have.value", "Gabriel Shapiro");

    })

    it('it should hold the value of the typed email', () => {
        cy.get('input[name="email"]').type("kafka@doge.com").should("have.value",  "kafka@doge.com");
    })

    it('should allow user to check the checkbox', () => {
        cy.get('input[type="checkbox"]').check().should("be.checked");
    })
})



