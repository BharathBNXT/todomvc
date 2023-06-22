describe("Login Functionality", () => {
  beforeEach(() => {
    // Visit the login page or perform any necessary setup
    cy.visit("/");
  });

  it("should log in successfully with valid credentials", () => {
    cy.contains("Login using Password instead").click();
    // Fill in the username and password fields
    cy.get("#identifier").type("krunalnampalliwar@gmail.com");
    cy.get("#password").type("test123");

    // Submit the login form
    cy.get("form").submit();
    cy.contains("Logged in");

    cy.contains("Account").click();
    cy.contains("Log out ").click();
    cy.contains("Yes").click();
    // Assert that the login was successful
  });

  it("should display an error message with invalid credentials", () => {
    cy.contains("Login using Password instead").click();

    // Fill in the username and password fields with invalid credentials
    cy.get("#identifier").type("invalidUsername");
    cy.get("#password").type("invalidPassword");

    // Submit the login form
    cy.get("form").submit();

    // Assert that an error message is displayed
    cy.contains("Invalid Credentials");
  });
});
