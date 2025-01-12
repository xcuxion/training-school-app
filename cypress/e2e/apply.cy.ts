describe("Application Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/apply");
  });

  it("should render the application form with all fields", () => {
    // Check if the title and personal info is rendered
    cy.get("h1").contains("Application Form").should("be.visible");

    cy.get("h2").contains("Personal Information").should("be.visible");
    cy.get("label").contains("First name*").should("be.visible");
    cy.get("label").contains("Other name").should("be.visible");
    cy.get("label").contains("Last name*").should("be.visible");
    cy.get("label").contains("Date of Birth*").should("be.visible");
    cy.get("label").contains("Gender").should("be.visible");
    cy.get("label").contains("Nationality").should("be.visible");
    cy.get("label").contains("Email").should("be.visible");
    cy.get("label").contains("Contact").should("be.visible");
    cy.get("label").contains("School").should("be.visible");
    cy.get("label").contains("Programme").should("be.visible");
    cy.get("label").contains("Current Year").should("be.visible");

    cy.get("h2").contains("Aspiration").should("be.visible");
    cy.get("label")
      .contains("Why do you think you should be accepted into this programme?*")
      .should("be.visible");
    cy.get("label")
      .contains(
        "How do you intend to balance this training programme with your academics?*"
      )
      .should("be.visible");
    cy.get("p")
      .contains("Do you have a working laptop of at least 4GB RAM?*")
      .should("be.visible");
    cy.get("p")
      .contains("Will you need a scholarship to join this programme?*")
      .should("be.visible");

    cy.get("button").contains("Apply!").should("be.visible");
  });

  it.only("should fill and submit the application form", () => {
    cy.get('input[name="fname"]').type("John");
    cy.get('input[name="oname"]').type("Doe");
    cy.get('input[name="lname"]').type("Smith");
    cy.get('input[name="dob"]').type("2000-01-01");
    cy.get('input[name="nationality"]').type("American");
    cy.get('input[name="email"]').type("john.doe@example.com");
    cy.get('input[name="contact"]').type("1234567890");
    cy.get('input[name="programme"]').type("Computer Science");
    cy.get('input[name="year"]').type("3");

    cy.get("#male").click();

    cy.get("button").contains("Select").click({ force: true });
    cy.get("div")
      .contains("University of Ghana - Legon")
      .click({ force: true });

    cy.get('textarea[name="reason"]').type(
      "I am passionate about technology and want to learn more."
    );
    cy.get('textarea[name="balance"]').type(
      "I will manage my time effectively."
    );

    cy.get("#yes").click();

    cy.get("#no").click();

    cy.get("button").contains("Apply!").click();

    // Check if the form submission was successful
    // You can add assertions here based on the expected behavior after form submission
  });
});
