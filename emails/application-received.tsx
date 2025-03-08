// import {
//   Body,
//   Button,
//   Container,
//   Head,
//   Hr,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Section,
//   Text,
// } from "@react-email/components";
// import * as React from "react";

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

// const ApplicationSubmitted = ({ userFirstname }: { userFirstname: string }) => (
//   <Html>
//     <Head />
//     <Preview>
//       You've successfully submitted your appliction to join Batch'25 of XCUXION
//     </Preview>
//     <Body style={main}>
//       <Container style={container}>
//         <Section style={box}>
//           {/* <Img
//             src={`${baseUrl}/static/logo.png`}
//             width="49"
//             height="21"
//             alt="Xcuxion Logo"
//             style={tag}
//           /> */}
//           <Hr style={hr} />
//           <Text style={header}> 🎉</Text>
//           <Text style={paragraph}>
//             Hey {userFirstname}, we’re excited to receive your application for
//             XCUXION Batch ’25! Your journey toward innovation and growth starts
//             here, and we can’t wait to learn more about you.
//           </Text>
//           <Text style={paragraph}> 🚀 What’s next? </Text>
//           <Text style={paragraph}>
//             ✅ Access Your Admission Portal – Review and update your application
//             details.
//             <Link style={anchor} href="/school/admission-portal">
//               Access Your Admission Portal
//             </Link>{" "}
//           </Text>
//           <Text style={paragraph}>
//             ✅ Explore Financial Aid Options – Learn about support available to
//             you.,{" "}
//             <Link style={anchor} href="https://xcuxion.org/school">
//               read this post.
//             </Link>{" "}
//           </Text>

//           <Text style={paragraph}>
//             ✅ Stay Connected – Our support team is here to guide you at every
//             step. We’ll keep you updated on the next steps in the selection
//             process. In the meantime, if you have any questions, feel free to
//             reach out—we’re here to help!{" "}
//             <Link style={anchor} href="https://xcuxion.org/#contact">
//               support site
//             </Link>
//             .
//           </Text>
//           <Text style={paragraph}>✨ Stay tuned for what’s ahead! ✨</Text>
//           <Text style={paragraph}>— The Admission team</Text>
//           <Hr style={hr} />
//           <Text style={footer}>XCUXION, Ghana</Text>
//           <Img
//             src={`${baseUrl}/static/logo.png`}
//             width="49"
//             height="21"
//             alt="Xcuxion Logo"
//             style={tagBase}
//           />
//         </Section>
//       </Container>
//     </Body>
//   </Html>
// );

// export default ApplicationSubmitted;

// const main = {
//   backgroundImage: "url('/logo.svg`')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundColor: "#f6f9fc",
//   fontFamily:
//     '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
// };

// const container = {
//   backgroundColor: "#ffffff",
//   margin: "20px auto",
//   padding: "20px 0 48px",
//   marginBottom: "64px",
//   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// };
// // const tag = {
// //   width: "150px",
// //   height: "80px",
// // };
// const box = {
//   padding: "0 48px",
//   lineHeight: "1.5",
// };

// const hr = {
//   borderColor: "#e6ebf1",
//   margin: "20px 0",
// };

// const header = {
//   fontSize: "24px",
//   fontWeight: "bold",
//   color: "#2c3e50",
//   marginBottom: "18px",
// };
// const paragraph = {
//   color: "#2c3e50",

//   fontSize: "16px",
//   lineHeight: "24px",
//   textAlign: "left" as const,
// };

// const anchor = {
//   color: "#556cd6",
// };

// const button = {
//   backgroundColor: "#656ee8",
//   borderRadius: "5px",
//   color: "#fff",
//   fontSize: "16px",
//   fontWeight: "bold",
//   textDecoration: "none",
//   textAlign: "center" as const,
//   display: "block",
//   width: "100%",
//   padding: "10px",
// };

// const footer = {
//   color: "#8898aa",
//   fontSize: "14px",
//   lineHeight: "16px",
// };

// const tagBase = {
//   width: "80px",
//   height: "50px",
//   marginBottom: "40px",
// };

// const footerLink = {
//   color: "#1A56DB",
//   textDecoration: "underline",
//   marginLeft: "30px",
// };

// const footerText = {
//   fontSize: "12px",
//   color: "#b7b7b7",
//   lineHeight: "15px",
//   textAlign: "left" as const,
//   marginBottom: "50px",
//   marginLeft: "30px",
// };
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
          <Text style={styles.paragraph}>
            - <strong>Stay Connected:</strong> If you have any questions or
            require further assistance, our admissions team is available to
            support you.
            <br />
            <Link style={styles.link} href="https://xcuxion.org/#contact">
              Contact Support
            </Link>
          </Text>
          <Text style={styles.paragraph}>
            We will notify you of the next steps in the selection process
            shortly. Thank you for your interest in XCUXION School.
          </Text>
          <Text style={styles.signOff}>Best regards,</Text>
          <Text style={styles.signOff}>XCUXION Admissions Team</Text>
          <Hr style={styles.hr} />

          <Text style={styles.footer}>XCUXION | Ghana</Text>
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
