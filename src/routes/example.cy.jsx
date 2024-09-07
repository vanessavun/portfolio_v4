import Example from "./example";

describe("Example component test", () => {
  beforeEach(() => {
    cy.mount(<Example />);
  });
  it("checks Photo Change button", () => {
    cy.contains("button", "Change").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Button clicked!");
    });
  });
  it("checks that username begins with vanessavun.com", () => {
    cy.get('[data-test="username-span"]').should("be.visible");
    cy.contains("span", "vanessavun.com").should("be.visible");
  });
  it("fills out form and clicks submit", () => {
    cy.get("input[id=username]").type("test_username");
    cy.get("input[id=username]").should("have.value", "test_username");
    cy.get("textarea[id=about]").should("have.value", "");
    cy.contains("button", "Save").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Form submitted successfully");
    });
  });
});
