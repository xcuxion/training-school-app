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

const ApplicationSubmitted = ({ userFirstname }: { userFirstname: string }) => (
  <Html>
    <Head />
    <Preview>XCUXION | Application Successfully Submitted</Preview>
    <Body style={styles.main}>
      <Container style={styles.container}>
        <Section style={styles.box}>
          <Img
            src={`https://res.cloudinary.com/dskdr2jxd/image/upload/v1741379214/exe_black_cnonnq.png`}
            width="150"
            alt="XCUXION Logo"
            style={styles.logo}
          />
          <Hr style={styles.hr} />
          <Text style={styles.header}>Application Received</Text>
          <Text style={styles.paragraph}>Dear {userFirstname},</Text>
          <Text style={styles.paragraph}>
            Thank you for submitting your application to join Batch '25 of
            XCUXION School. We appreciate your interest in our program and
            commend your commitment to professional growth and innovation.
          </Text>
          <Text style={styles.subHeader}>Next Steps</Text>
          <Text style={styles.paragraph}>
            - <strong>Access Your Admission Portal:</strong> Review your
            application status and track updates.
            <br />
            <Link style={styles.link} href="/school/admission-portal">
              Visit Your Admission Portal
            </Link>
          </Text>
          <Text style={styles.paragraph}>
            - <strong>Explore Financial Aid Options:</strong> Learn about
            available support and funding opportunities.
            <br />
            <Link style={styles.link} href="https://xcuxion.org/school">
              View Financial Aid Details
            </Link>
          </Text>
        </Section>
        <Section style={styles.infobox}>
            <Text style={styles.subHeader}>
              An introductory webinar will be hosted to answer any questions you have regarding XCUXION School Batch'25
            </Text>
            <Text style={styles.details}>
              Date & Time: Saturday 22nd March, 2025 @ 6:00 p.m <br/> Location: Google Meet
            </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ApplicationSubmitted;

const styles = {
  main: {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "20px auto",
    padding: "20px 0 48px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  box: {
    padding: "0 48px",
    lineHeight: "1.5",
  },
  infobox: {
    background: "lightgray",
    padding: "0 48px",
    lineHeight: "1.5",
  },
  logo: {
    display: "flex",
    margin: "auto",
    textAlign: "start" as const,
    alignItems: "start",
    justifyContent: "start",
  },
  hr: {
    borderColor: "#e6ebf1",
    margin: "20px 0",
  },
  details: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#555",
    lineHeight: "1.6",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "18px",
  },
  subHeader: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: "20px",
    marginBottom: "8px",
  },
  paragraph: {
    color: "#2c3e50",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const,
    marginBottom: "16px",
  },
  link: {
    color: "#1A56DB",
    textDecoration: "underline",
    fontWeight: "bold",
  },
  signOff: {
    fontSize: "16px",
    color: "#2c3e50",
    fontStyle: "italic",
  },
  footer: {
    fontSize: "14px",
    color: "#8898aa",
    marginBottom: "16px",
  },
};
