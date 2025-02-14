import { HeightIcon, WidthIcon } from "@radix-ui/react-icons";
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
import Image from "next/image";
import * as React from "react";

const AdmittedMessage = () => {
  return (
    <Html>
      <Head />
      <Preview>XCUXION - Admission Status Update</Preview>
      <Body style={main}>
        <Container style={styles}>
          <Section style={section}>
            <Img style={tag} src="/logo.svg" alt="XCUXION Logo" width="300" height="100" />
            <Text style={heading}>🌟 Congratulations! 🎉</Text>
            <Text style={paragraph}>
              Your application to join Batch'25 of XCUXION has been accepted.
            </Text>
            <Text style={paragraph}>
              This is the beginning of an exciting journey! Your acceptance into
              Batch’25 of XCUXION is a testament to your hard work, passion, and
              dedication. The future holds endless possibilities, and this
              opportunity is just the first step toward something truly amazing.{" "}
              <br /> <br />
              Embrace every challenge, learn from every experience, and connect
              with like-minded individuals who will help shape your growth. This
              is your moment to shine, to innovate, and to leave your mark. We
              can’t wait to see the incredible things you will accomplish! 🚀✨
              Welcome to a new chapter of success!
            </Text>
            <Text style={paragraph}>Below are your credentials:
              <Text>Username:</Text>
              <Text>Password:</Text>
            </Text>
            <Image
              src="/public/logo.png"
              alt="XCUXION Logo"
              width="250"
              height="150"
            />
            <Button href="https://your-admission-portal-link.com">
              Visit Your Admission Portal
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AdmittedMessage;

const main = {
  border: "1px solid blue",
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
const tag = {
  width: "250px",  
  height: "150px",
  display: "block", 
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
  lineHeight: "32px",
  textAlign: "left" as const,
  marginBottom: "24px",
  maxWidth: "600px",
  margin: "0 auto",
};
