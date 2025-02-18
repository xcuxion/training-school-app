import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
const billing = () => {
  return (
    <Html>
      <Head />
      <Preview>XCUXION - Your Payment Details</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={headerText}>Payment Details</Text>
            <Hr style={hr} />
            <Text style={paragraph}>Card Number: **** **** **** 1234</Text>
            <Text style={paragraph}>Expiration Date: 12/25</Text>
            <Text style={paragraph}>CVC: 123</Text>
            <Button href="#" style={button}>
              Update Payment Details
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default billing;

const main = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif",
  textAlign: "center" as const,
};

const container = {
  backgroundColor: "#ffffff",
  margin: "60px auto",
  padding: "20px 40px",
  marginBottom: "64px",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",
  fontSize: "18px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const headerText = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#333",
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
  padding: "12px",
  marginTop: "20px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
