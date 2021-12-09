Cypress.Commands.add("the", testSelector =>
  cy.get(`[data-test-${testSelector}]`)
);
Cypress.Commands.add("theFirst", testSelector =>
  cy.get(`[data-test-${testSelector}]`).eq(0)
);
Cypress.Commands.add("clickThe", testSelector =>
  cy
    .get(`[data-test-${testSelector}]`)
    .eq(0)
    .click()
);
Cypress.Commands.add("fillOutThe", testSelector => {
  return {
    with(formData) {
      cy.get(`[data-test-${testSelector}]`).as("form");
      Object.keys(formData).forEach(key => {
        cy.get("@form")
          .find(`[data-test-${key}]`)
          .type(formData[key]);
      });
      cy.get("@form").submit();
    }
  };
});
