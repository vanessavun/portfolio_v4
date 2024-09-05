import React from "react";
import Hero from "./Hero";

describe("<Hero />", () => {
  it("checks for the portfolio name", () => {
    cy.mount(<Hero />);
    cy.contains("Vanessa Vun").should("be.visible");
    cy.contains(
      "In the SF Bay Area, I am a Front-End Engineer at SciShield, focused on building features to help people work efficiently and for laboratories to stay safe.",
    ).should("be.visible");
  });
});
