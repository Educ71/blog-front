context("Cookies", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("find elements in screen", () => {
    cy.contains("Welcome to Next.js!");
    cy.get('[data-cy="test"');
  });
});
