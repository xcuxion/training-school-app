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
import { flexRender } from "@tanstack/react-table";
import Image from "next/image";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const AdmittedMessage = () => {
  return (
    <Html>
      <Head />
      <Preview>XCUXION - Admission Status Update</Preview>
      <Body style={main}>
        <Container style={styles}>
          <Section style={section}>
            <Img
              style={tag}
              src={`${baseUrl}/static/logo.png`}
              alt="XCUXION Logo"
              width="300"
              height="100"
            />

            <Img
              style={congratImg}
              src={`${baseUrl}/static/congrat.jpeg`}
              alt="XCUXION Logo"
              width="250"
              height="150"
            />
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
            <Text style={paragraph}>
              Below are your credentials:
              <Text>Username:</Text>
              <Text>Password:</Text>
            </Text>
            <Button href="https://your-admission-portal-link.com">
              Visit Your Admission Portal
            </Button>
            <Img
              src={`${baseUrl}/static/logo.png`}
              width="49"
              height="21"
              alt="Xcuxion Logo"
              style={tagBase}
            />
          </Section>


        </Container>
      </Body>
    </Html>
  );
};

export default AdmittedMessage;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif",
};

const styles = {
  padding: "20px 0 48px",
  marginBottom: "64px",
  border: "1px solid blue",
};

const section = {
  padding: "20px 20px 48px",
  display: "flex",
  flexRender: "column",
};
const tag = {
  width: "150px",
  height: "80px",
};
const tagBase = {
  width: "80px",
  height: "50px",
  marginTop:"20px",
};
const congratImg = {
  width: "500px",
  height: "450px",
  display: "block",
  margin: "auto",
  marginTop: "20px",
  marginBottom: "40px",
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

const footerLink = {
  color: "#1A56DB",
  textDecoration: "underline",
  marginLeft:"30px",
};

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left" as const,
  marginBottom: "50px",
  marginLeft:"30px",

};
