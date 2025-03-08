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

// const AdmittedMessage = () => {
//   return (
//     <Html>
//       <Head />
//       <Preview>XCUXION - Admission Status Update</Preview>
//       <Body style={main}>
//         <Container style={styles}>
//           <Section style={section}>
//             <Img
//               style={tag}
//               src={`${baseUrl}/static/logo.png`}
//               alt="XCUXION Logo"
//               width="300"
//               height="100"
//             />

//             <Img
//               style={congratImg}
//               src={`${baseUrl}/static/congrat.jpeg`}
//               alt="XCUXION Logo"
//               width="250"
//               height="150"
//             />
//             <Text style={heading}>🌟 Congratulations! 🎉</Text>
//             <Text style={paragraph}>
//               Your application to join Batch'25 of XCUXION has been accepted.
//             </Text>
//             <Text style={paragraph}>
//               This is the beginning of an exciting journey! Your acceptance into
//               Batch’25 of XCUXION is a testament to your hard work, passion, and
//               dedication. The future holds endless possibilities, and this
//               opportunity is just the first step toward something truly amazing.{" "}
//               <br /> <br />
//               Embrace every challenge, learn from every experience, and connect
//               with like-minded individuals who will help shape your growth. This
//               is your moment to shine, to innovate, and to leave your mark. We
//               can’t wait to see the incredible things you will accomplish! 🚀✨
//               Welcome to a new chapter of success!
//             </Text>
//             <Text style={paragraph}>
//               Below are your credentials:
//               <Text>Username:</Text>
//               <Text>Password:</Text>
//             </Text>
//             <Button href="https://your-admission-portal-link.com">
//               Visit Your Admission Portal
//             </Button>
//             <Img
//               src={`${baseUrl}/static/logo.png`}
//               width="49"
//               height="21"
//               alt="Xcuxion Logo"
//               style={tagBase}
//             />
//           </Section>
//         </Container>
//       </Body>
//     </Html>
//   );
// };

// export default AdmittedMessage;

// const main = {
//   backgroundColor: "#f6f9fc",
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif",
// };

// const styles = {
//   padding: "20px 0 48px",
//   marginBottom: "64px",
//   border: "1px solid blue",
// };

// const section = {
//   padding: "20px 20px 48px",
//   display: "flex",
//   flexRender: "column",
// };
// const tag = {
//   width: "150px",
//   height: "80px",
// };
// const tagBase = {
//   width: "80px",
//   height: "50px",
//   marginTop: "20px",
// };
// const congratImg = {
//   width: "500px",
//   height: "450px",
//   display: "block",
//   margin: "auto",
//   marginTop: "20px",
//   marginBottom: "40px",
// };
// const heading = {
//   color: "#525f7f",
//   fontSize: "24px",
//   fontWeight: "bold",
//   lineHeight: "32px",
//   textAlign: "center" as const,
//   marginBottom: "24px",
// };

// const paragraph = {
//   color: "#525f7f",
//   fontSize: "16px",
//   lineHeight: "32px",
//   textAlign: "left" as const,
//   marginBottom: "24px",
//   maxWidth: "600px",
//   margin: "0 auto",
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
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const AdmittedMessage = ({username, password}: {username:string, password:string}) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to XCUXION School Batch'25 - Your Admission Details</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Img
              src={`https://res.cloudinary.com/dskdr2jxd/image/upload/v1741379214/exe_black_cnonnq.png`}
              alt="XCUXION Logo"
              width="200"
               style={logoStyle}
            />
          </Section>

          <Section style={contentSection}>
            <Img
              src={`${baseUrl}/static/congrat.jpeg`}
              alt="Congratulations"
              width="250"
              height="150"
              style={imageStyle}
            />
            <Text style={heading}>🎉 Congratulations! 🎉</Text>
            <Text style={paragraph}>
              We are delighted to inform you that your application to join Batch'25 of
              XCUXION School has been successful! This marks the beginning of an
              exciting journey toward innovation, learning, and professional growth.
            </Text>

            <Hr style={divider} />

            <Text style={subHeading}>Your Login Credentials</Text>
            <Text style={paragraph}>Username: <strong>{username}</strong></Text>
            <Text style={paragraph}>Password: <strong>{password}</strong></Text>

            <Button
              href="https://your-admission-portal-link.com"
              style={buttonStyle}
            >
              Access Your Admission Portal
            </Button>

            <Hr style={divider} />

            <Text style={paragraph}>
              If you have any questions, feel free to contact us at
              <a href="mailto:support@xcuxion.org" style={linkStyle}> support@xcuxion.org</a>.
            </Text>

            <Text style={footerText}>Welcome to the XCUXION community! 🚀</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AdmittedMessage;

const main = {
  backgroundColor: "#f4f4f4",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "auto",
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const headerSection = {
  textAlign: "center" as const,
  paddingBottom: "20px",
};

const contentSection = {
  textAlign: "center" as const,
};

const logoStyle = {
  display: "block",
  margin: "0 auto",
};

const imageStyle = {
  display: "block",
  margin: "20px auto",
};

const heading = {
  color: "#333333",
  fontSize: "22px",
  fontWeight: "bold",
};

const subHeading = {
  color: "#333333",
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "20px",
};

const paragraph = {
  color: "#555555",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "10px 0",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#ffffff",
  padding: "12px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  display: "inline-block",
  fontWeight: "bold",
  marginTop: "20px",
};

const divider = {
  border: "none",
  borderTop: "1px solid #ddd",
  margin: "20px 0",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
};

const footerText = {
  color: "#777777",
  fontSize: "12px",
  marginTop: "20px",
};
