import React from 'react'
import Hero from './Hero'

describe('<Hero />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Hero />)
    cy.contains("Vanessa Vun").should("be.visible")
  })
})