describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have a header with logo and login button', () => {
    cy.get('h1').contains('XCUXION').should('be.visible');
    cy.get('button').contains('Log in').should('be.visible');
  });

  it('should render main section', () => {
    cy.get('h1').contains('Empowering Dreams, Building Futures').should('be.visible');
    cy.get('p').contains('At XCUXION, we turn aspirations into achievements. Whether you’re an aspiring technologist, a budding entrepreneur, or a skilled engineer, we provide the tools, knowledge, and opportunities you need to succeed. Are you ready to take the next step? Join XCUXION and start your journey today.').should('be.visible');
    cy.get('button').contains('Become a member').should('be.visible');
  });

  it('should render the Inquiry form', () => {
    cy.get('form').should('be.visible');
  });

  it('should render the Footer', () => {
    cy.get('footer').should('be.visible');
  });

  // it('should render the Team section', () => {
  //   cy.get('.TeamMemberCard').should('have.length.greaterThan', 0);
  // });

  // it('should render Testimonials section', () => {
  //   cy.get('.testimonial-card').should('have.length.greaterThan', 0);
  // });

  // it('should render FAQs section', () => {
  //   cy.get('.faq-card').should('have.length.greaterThan', 0);
  // });

  it('should open the login modal', () => {
    cy.get('button').contains('Log in').click();
    });

});
