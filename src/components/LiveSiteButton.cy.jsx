import React from "react";
import LiveSiteButton from "./LiveSiteButton";

describe("<Hero />", () => {
  it("renders", () => {
    cy.mount(
      <LiveSiteButton url="https://vanessavun.com" name="My Portfolio" />,
    );
    cy.contains("My Portfolio").should("be.visible");
  });
});
