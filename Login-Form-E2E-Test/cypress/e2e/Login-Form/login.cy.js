/* eslint-disable no-undef */
describe("Login Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/");
  });

  it("successful login", () => {
    cy.get('[data-cy="form-email"]').type("General_Leuschke@hotmail.com");
    cy.get('[data-cy="form-password"]').type("2odFMqYXH2fQasK");
    cy.get('[data-cy="form-terms"]').check();
    cy.get('[data-cy="form-btn-submit"]').click();

    cy.url().should("include", "/success");
    cy.contains("Başarılı Giriş!");
  });

  it("wrong email", () => {
    cy.get('[data-cy="form-email"]').type("General_Leuschkqhotmail.com");
    cy.get('[data-cy="form-password"]').type("2odFMqYXH2fQasK");
    cy.get('[data-cy="form-terms"]').check();

    cy.get(".invalid-feedback").should("have.length", 1);
    cy.get('[data-cy="error-email"]').should("be.visible");
    cy.contains("Please enter a valid email address").should("be.visible");
    cy.get('[data-cy="form-btn-submit"]').should("be.disabled");
  });

  it("wrong email and password", () => {
    cy.get('[data-cy="form-email"]').type("General_Leuschkqhotmail.com");
    cy.get('[data-cy="form-password"]').type("123456789");
    cy.get('[data-cy="form-terms"]').check();

    cy.get(".invalid-feedback").should("have.length", 2);
    cy.contains(
      "Password must be at least 8 characters, include uppercase, lowercase and number",
    ).should("be.visible");
    cy.get('[data-cy="form-btn-submit"]').should("be.disabled");
  });

  it("email and passwords are correct but terms are not accepted", () => {
    cy.get('[data-cy="form-email"]').type("General_Leuschke@hotmail.com");
    cy.get('[data-cy="form-password"]').type("2odFMqYXH2fQasK");

    cy.get('[data-cy="form-terms"]').should("not.be.checked");
    cy.get('[data-cy="form-btn-submit"]').should("be.disabled");
  });
});
