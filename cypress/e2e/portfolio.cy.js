describe("template spec", () => {
  it("visits the portfolio and checks for a successful contact form submission", () => {
    cy.visit("/");
    cy.get("#about").scrollIntoView();
    cy.contains("Cats").should("be.visible");
    cy.get("#projects").scrollIntoView();
    cy.contains("Apples to Oranges").should("be.visible");
    cy.get("#contact").scrollIntoView();
    cy.get('[for="name"] > .block').type("Vanessa Vun");
    cy.get('[for="email"] > .block').type("vanessavun@gmail.com");
    cy.get('[for="message"] > .block').type("Test");
    cy.contains("button", "Submit").click();
    cy.contains("Thank you for your message!").should("be.visible");
  });
});
