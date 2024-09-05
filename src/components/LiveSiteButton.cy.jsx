import React from "react";
import LiveSiteButton from "./LiveSiteButton";

describe("<Hero />", () => {
  it("renders the live site button", () => {
    cy.mount(
      <LiveSiteButton url="https://vanessavun.com" name="My Portfolio" />,
    );
    cy.contains("My Portfolio").should("be.visible");
    cy.contains("My Portfolio").click();
  });
});
