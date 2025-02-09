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

  
  const billing = () => {
    return (
      <Html>
        <Head/>
        <Preview>XCUXION - Your Payment Details</Preview>
        <Body style={main}>
            <Container>
                <Section>
                    <Text>Payment Details</Text>
                    <Hr/>
                    <Text>Card Number: **** **** **** 1234</Text>
                    <Text>Expiration Date: 12/25</Text>
                    <Text>CVC: 123</Text>
                    <Button href="#">Update Payment Details</Button>
                </Section>
            </Container>
        </Body>
      </Html>
    )
  }
  
  export default billing

  const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif",
  };

  const container = {
    backgroundColor: "#ffffff",
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
    marginTop: "20px",
  };

  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
  };