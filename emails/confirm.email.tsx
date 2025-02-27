import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface XcuxionConfirmEmailProps {
  validationCode: number;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const XcuxionConfirmEmail = ({
  validationCode,
}: {
  validationCode: number;
}) => (
  <Html>
    <Head />
    <Preview>Confirm your email address</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* <Section style={logoContainer}>
          <Img
            src={`${baseUrl}/static/logo.png`}
            width="50"
            height="21"
            alt="Xcuxion Logo"
            style={tag}
          />
        </Section> */}
        <Heading style={h1}>Confirm your email address</Heading>
        <Text style={heroText}>
          Your confirmation code is below - enter it in your open browser window
          and we'll help you get signed in.
        </Text>

        <Section style={codeBox}>
          <Text style={confirmationCodeText}>{validationCode}</Text>
        </Section>

        <Text style={text}>
          If you didn't request this email, there's nothing to worry about, you
          can safely ignore it.
        </Text>

        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: "100%" }}>
              <Text style={text}>
                Connect with us
                <Link style={anchor} href="https://xcuxion.org/">
                  Visit our website
                </Link>{" "}
              </Text>
              <Img
                src={`${baseUrl}/static/logo.png`}
                width="49"
                height="21"
                alt="Xcuxion Logo"
                style={tagBase}
              />
                        <Text style={footerText}>
            ©2025 XCUXION , All rights reserved. <br />
            Ghana
            <br />
            <br />
            All rights reserved.
          </Text>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

XcuxionConfirmEmail.PreviewProps = {
  validationCode: 235642,
} as XcuxionConfirmEmailProps;

export default XcuxionConfirmEmail;

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left" as const,
  marginBottom: "50px",
};

const footerLink = {
  color: "#1A56DB",
  textDecoration: "underline",
};

const anchor = {
  color: "#556cd6",
  marginLeft: "8px",
};

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
};

const main = {
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", // Fixed shadow property
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
  border: "1px solid whitesmoke"
};

const logoContainer = {
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const tag = {
  width: "150px",
  height: "80px",

};
const tagBase = {
  width: "150px",
  height: "80px",
};
const h1 = {
  color: "#1d1c1d",
  fontSize: "32px",
  fontWeight: "700",
  textAlign: "left" as const,
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "18px",
  lineHeight: "28px",
  marginBottom: "30px",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginBottom: "30px",
  padding: "40px 10px",
};

const confirmationCodeText = {
  fontSize: "28px",
  color: "#1A56DB",
  textAlign: "center" as const,
  verticalAlign: "middle",
};

const text = {
  color: "#000",
  fontSize: "16px",
  lineHeight: "24px",
};
