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

const ApplicationSubmitted = ({
  userFirstname,
  email,
}: {
  userFirstname: string;
  email: string;
}) => (
  <Html>
    <Head />
    <Preview>
      You've successfully submitted your appliction to join Batch'25 of XCUXION
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          {/* <Img
            src={`${baseUrl}/static/logo.png`}
            width="49"
            height="21"
            alt="Xcuxion Logo"
            style={tag}
          /> */}
          <Hr style={hr} />
          <Text style={header}>🌟 Thank You for Your Application! 🎉</Text>
          <Text style={paragraph}>
            We’re excited to receive your application for XCUXION Batch ’25!
            Your journey toward innovation and growth starts here, and we can’t
            wait to learn more about you.
          </Text>
          <Text style={paragraph}> 🚀 What’s next? </Text>
          <Text style={paragraph}>
            ✅ Access Your Admission Portal – Review and update your application
            details.
            <Link style={anchor} href="/school/admission-portal">
              Access Your Admission Portal
            </Link>{" "}
          </Text>
          <Text style={paragraph}>
            ✅ Explore Financial Aid Options – Learn about support available to
            you.,{" "}
            <Link style={anchor} href="https://xcuxion.org/#admissions">
              read this post.
            </Link>{" "}
          </Text>

          <Text style={paragraph}>
            ✅ Stay Connected – Our support team is here to guide you at every
            step. We’ll keep you updated on the next steps in the selection
            process. In the meantime, if you have any questions, feel free to
            reach out—we’re here to help!{" "}
            <Link style={anchor} href="https://xcuxion.org/#contact">
              support site
            </Link>
            .
          </Text>
          <Text style={paragraph}>✨ Stay tuned for what’s ahead! ✨</Text>
          <Text style={paragraph}>— The Admission team</Text>
          <Hr style={hr} />
          <Text style={footer}>XCUXION, Ghana</Text>
          <Img
            src={`${baseUrl}/static/logo.png`}
            width="49"
            height="21"
            alt="Xcuxion Logo"
            style={tagBase}
          />
        </Section>

        <Section>
          <Link
            style={footerLink}
            href="https://slackhq.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our blog
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/legal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Policies
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/help"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help center
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/community"
            target="_blank"
            rel="noopener noreferrer"
            data-auth="NotApplicable"
            data-linkindex="6"
          >
            Slack Community
          </Link>
          <Text style={footerText}>
            ©2022 XCUXION Technologies, LLC, All rights reserved. <br />
            500 Howard Street, San Francisco, Kumasi, Ghana
            <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ApplicationSubmitted;

const main = {
  backgroundImage: "url('/logo.svg`')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "20px auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};
// const tag = {
//   width: "150px",
//   height: "80px",
// };
const box = {
  padding: "0 48px",
  lineHeight: "1.5",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const header = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#2c3e50",
  marginBottom: "18px",
};
const paragraph = {
  color: "#2c3e50",

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
  fontSize: "14px",
  lineHeight: "16px",
 
};

const tagBase = {
  width: "80px",
  height: "50px",
   marginBottom: "40px",
};

const footerLink = {
  color: "#1A56DB",
  textDecoration: "underline",
  marginLeft: "30px",
};

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left" as const,
  marginBottom: "50px",
  marginLeft: "30px",
};
