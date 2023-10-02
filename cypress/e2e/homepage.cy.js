// <reference types="cypress" />
describe('homepage', () => {
  beforeEach(() => {
    cy
    .visit('https://test-web.akc.org/')
    .viewport(1536, 960)
  })

  
    it("should have American Kennel Club on the title", () => {
      cy.title().should("eq", "American Kennel Club")
    })  

  
    it("should check if element is present", () => {
      cy
      .get('.utility-header > :nth-child(1) > [href="https://stage.apps.akc.org/event-search"]').should("exist")
      .get(':nth-child(1) > [href="https://marketplace.akc.org/"]').should("exist")
      .get(':nth-child(1) > [href="https://test-web.akc.org/register/"]').should("exist")
      .get('.utility-header > :nth-child(1) > [href="https://shop.akc.org/"]').should("exist")
      .get(':nth-child(1) > [href="https://akc.tv/?utm_source=akc.org&utm_medium=homepage&utm_campaign=utility_bar"]').should("exist")


    })  

  describe("User can login", () => {
    it.only("should enter valid credentials and successfully login", () => {
      cy
      .get('.sign-in-nav > .link-with-icon').click()
      .get('#gigya-modal-plugin-container-showScreenSet_content').should('be.visible')
      .get('input[name="username"]').first().type('pxm+1@akc.org')
      .get('input[name="password"]').first().type('Santa-palos09')
      .get('#gigya-login-form > :nth-child(3) > .gigya-composite-control-submit > .gigya-input-submit').click()
      .get('.sign-in-nav > .link-with-icon').click()
      .get('.menu-popover__item').contains('Log Out').click({force:true})

      
    })
  })

  describe("Dropdown options can be selected", () => {
    it("should open the dropdown and select an option", () => {
      cy
      .get('#homepage-hero-breed-search-selectized').click()
      .get('[data-value="https://test-web.akc.org/dog-breeds/alaskan-klee-kai/"]').click()
      .title().should("include", "Alaskan Klee Kai")
        })
  })

  describe("body elements exist", () => {
    it("elements and url on the body should exist", () => {
      cy
      .get('#welcome > .interactive-hero__item-inner > .interactive-anchor')
      .get('.three > .interactive-hero__item-inner > .interactive-anchor')    
        })
  })

  describe("body elements exist", () => {
    it("elements and url on the body should exist", () => {
      cy
      .get('.content-card-grid > .grid > :nth-child(1) > .content-card > .content-card__body > .content-card__title')
      .get(':nth-child(4) > .content-card > .content-card__body > .content-card__title') 
        })
  })

})
