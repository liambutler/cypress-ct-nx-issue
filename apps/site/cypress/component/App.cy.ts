import { App } from '../../src/app/app'

describe('App.cy.js', () => {
  it('playground', () => {
    cy.mount(App)
  })
})
