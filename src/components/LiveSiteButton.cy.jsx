import React from "react";
import LiveSiteButton from "./LiveSiteButton";

describe("<Hero />", () => {
  it("renders the live site button", () => {
    const button = "My Button"
    cy.mount(
      <LiveSiteButton url="https://vanessavun.com" name={button} />,
    );
    cy.contains(button).should("be.visible");
    cy.contains(button).click();
  });
});
