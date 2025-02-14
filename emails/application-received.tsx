import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  const XcuxionWelcomeEmail = ({userFirstname, email}: {userFirstname:string, email: string}) => (
    <Html>
      <Head />
      <Preview>You've successfully submitted your appliction to join Batch'25 of XCUXION</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src={`../public/logo.png`}
              width="49"
              height="21"
              alt="Stripe"
            />
            <Hr style={hr} />
            <Text style={paragraph}>
              Thanks for submitting your application. You're now ready to
              make your dream a reality with us!
            </Text>
            <Text style={paragraph}>
              You can view and edit the information you provided for
              your appication right from your dashboard.
            </Text>
            <Button style={button} href="/admission-portal">
              Access Your Admission Portal
            </Button>
            <Hr style={hr} />
            <Text style={paragraph}>
              If you haven't read about our financial aid policies, {" "}
              <Link style={anchor} href="https://stripe.com/docs">
                read this post.
              </Link>{" "}
            </Text>

            <Text style={paragraph}>
              We'll be here to help you with any step along the way. You can find
              answers to most questions and get in touch with us on our{" "}
              <Link style={anchor} href="https://support.stripe.com/">
                support site
              </Link>
              .
            </Text>
            <Text style={paragraph}>— The Admission team</Text>
            <Hr style={hr} />
            <Text style={footer}>
              XCUXION, Ghana
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default XcuxionWelcomeEmail;
  
  const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };
  
  const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
  };
  
  const box = {
    padding: "0 48px",
  };
  
  const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
  };
  
  const paragraph = {
    color: "#525f7f",
  
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const,
  };
  
  const anchor = {
    color: "#556cd6",
  };
  
  const button = {
    backgroundColor: "#656ee8",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
    padding: "10px",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
  };
  