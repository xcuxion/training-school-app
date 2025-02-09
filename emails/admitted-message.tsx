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

const AdmittedMessage = () => {
  return (
    <Html>
        <Head />
        <Preview>XCUXION - Admission Status Update</Preview>
        <Body style={main}>
            <Container style={styles}>
                <Section style={section}>
                    <Text style={heading}>Congratulations!</Text>
                    <Text style={paragraph}>Your application to join Batch'25 of XCUXION has been accepted.</Text>
                    <Text style={paragraph}>We will send you an email shortly with further instructions on how to proceed.</Text>
                    <Button href="#">Visit Your Admission Portal</Button>
                </Section>
            </Container>
        </Body>
    </Html>
  )
}

export default AdmittedMessage

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif",
};

const styles = {
    padding: "20px 0 48px",
    marginBottom: "64px",
};

const section = {
    padding: "0 48px",
};

const heading = {
    color: "#525f7f",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "32px",
    textAlign: "center" as const,
    marginBottom: "24px",
};

const paragraph = {
    color: "#525f7f",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const,
    marginBottom: "24px",
    maxWidth: "600px",
    margin: "0 auto",
};