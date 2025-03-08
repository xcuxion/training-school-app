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

const BatchInformation = () => {
  return (
    <Html>
      <Head />
      <Preview>XCUXION School Batch'25</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.section}>
            <Text style={styles.heading}>XCUXION School Batch'25</Text>
            <Text style={styles.paragraph}>
              Please find attached an overview of the XCUXION School Batch '25
              training program, outlining the structure and key details.{" "}
            </Text>
            <Img
              src={`https://res.cloudinary.com/dskdr2jxd/image/upload/v1741379214/exe_black_cnonnq.png`}
              alt="Logo"
              width="600"
              style={styles.image}
            />
            <Hr />
            <Text style={styles.subheading}>
              Anticipate!
            </Text>
            <Text style={styles.paragraph}>
              Schedule a date with us to gain insights into the <b>XCUXION School Batch'25 </b>program,
              meet our team, and learn how we help individuals turn ideas into
              thriving startups.
            </Text>
            <Text style={styles.details}>
              Date & Time: Saturday 22nd March, 2025 @ 6:00 p.m <br/> Location: Google Meet
            </Text>
            {/* <Button href="https://xcuxion.org/school/webinars" style={styles.button}>
              Register for the Webinar
            </Button> */}
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

export default BatchInformation;

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
    // textAlign: "center" as "center",
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
    fontWeight: "900",
    color: "#555",
    lineHeight: "1.6",
  },
  image: {
    maxWidth: "30%",
    borderRadius: "8px",
    margin: "20px 0",
    textAlign: "center" as const,
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
