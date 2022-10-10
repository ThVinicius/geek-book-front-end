import userFactory from "../factories/userFactory"

describe("SignUp", () => {
  it("verifica a criação de uma conta", () => {
    cy.visit("http://127.0.0.1:5173/")

    cy.get('[data-cy="signUp link"]').click()

    cy.url().should("equal", "http://127.0.0.1:5173/signup")

    const { nickname, avatar, email, password, confirmPassword } = userFactory()

    cy.get('[data-cy="nickname"]').type(nickname)

    cy.get('[data-cy="avatar"]').type(avatar)

    cy.get('[data-cy="email"]').type(email)

    cy.get('[data-cy="password"]').type(password)

    cy.get('[data-cy="confirm password"]').type(confirmPassword)

    cy.intercept("POST", "/signup").as("signUp")

    cy.get('[data-cy="submit"]').click()

    cy.wait("@signUp")

    cy.url().should("equal", "http://127.0.0.1:5173/")

    cy.get('[data-cy="email"]').type(email)

    cy.get('[data-cy="password"]').type(password)

    cy.intercept("POST", "/signin").as("signIn")

    cy.get('[data-cy="submit"]').click()

    cy.wait("@signIn")

    cy.url().should("equal", "http://127.0.0.1:5173/home")
  })
})
