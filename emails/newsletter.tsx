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

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const XCUXIONInvitation = () => {
  return (
    <Html>
      <Head />
      <Preview>Invitation to Join XCUXION School Batch'25</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.section}>
            <Text style={styles.heading}>
              XCUXION School Batch'25
            </Text>
            <Img
              src={`${baseUrl}/static/batch25info.jpeg`}
              alt="XCUXION Batch'25 Roadmap"
              width="600"
              style={styles.image}
            />
            <Hr />
            <Text style={styles.subheading}>
              Join Our Introductory Webinar
            </Text>
            <Text style={styles.paragraph}>
              Gain insights into the <b>XCUXION School Batch'25 roadmap</b> ,
              meet our team, and learn how we help individuals turn ideas into
              thriving startups.
            </Text>
            <Text style={styles.details}>
              Date & Time: Saturday 22nd March, 2025 <br/> Location: Online
            </Text>
            <Button href="https://xcuxion.org/school/webinars" style={styles.button}>
              Register for the Webinar
            </Button>
            <Hr />
            <Text style={styles.footer}>
              For inquiries, send us a message via{" "}
              <Link href="https://xcuxion.org/#contact" style={styles.link}>
                our portal
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default XCUXIONInvitation;

// Styles
const styles = {
  main: {
    backgroundColor: "#f9f9f9",
    fontFamily:
      "'Arial', 'Helvetica Neue', 'Segoe UI', Roboto, 'Ubuntu', sans-serif",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  section: {
    textAlign: "center" as "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#222",
  },
  subheading: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#444",
    marginTop: "20px",
  },
  paragraph: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#333",
    lineHeight: "1.6",
  },
  details: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#555",
    lineHeight: "1.6",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "8px",
    margin: "20px 0",
  },
  button: {
    backgroundColor: "#0056b3",
    color: "#ffffff",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "6px",
    display: "inline-block",
    marginTop: "20px",
  },
  footer: {
    fontSize: "14px",
    color: "#666",
    marginTop: "20px",
  },
  link: {
    color: "#0056b3",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
