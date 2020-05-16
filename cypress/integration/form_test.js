describe('This is our first test!', () => {
    it('should return true', ()=>{
        expect(true).to.equal(true);
    })
})

describe('testing our form inputs', ()=>{
   beforeEach( ()=> {
        cy.visit('localhost:3000');
    })

    it("finds the Name Input", ()=> {
        cy.contains('Name')
})

    it('inputs name into the name input', ()=>{

        cy.get('input[name="name"]').type("Gabriel Shapiro").should("have.value", "Gabriel Shapiro");
    })

    it('checks that checkbox can be checked', ()=>{
        cy.get('input[type="checkbox"]').check().should("be.checked");
    })
})



