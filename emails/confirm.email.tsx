// import {
//     Body,
//     Container,
//     Column,
//     Head,
//     Heading,
//     Html,
//     Img,
//     Link,
//     Preview,
//     Row,
//     Section,
//     Text,
//   } from "@react-email/components";
//   import * as React from "react";

//   interface XcuxionConfirmEmailProps {
//     validationCode?: string;
//   }

//   const baseUrl = process.env.VERCEL_URL
//     ? `https://${process.env.VERCEL_URL}`
//     : "";

//   export const XcuxionConfirmEmail= ({
//     validationCode,
//   }: XcuxionConfirmEmailProps ) => (
//     <Html>
//       <Head />
//       <Preview>Confirm your email address</Preview>
//       <Body style={main}>
//         <Container style={container}>
//           <Section style={logoContainer}>
//             <Img
//               src={`${baseUrl}/static/slack-logo.png`}
//               width="120"
//               height="36"
//               alt="XCUXION Logo"
//             />
//           </Section>
//           <Heading style={h1}>Confirm your email address</Heading>
//           <Text style={heroText}>
//             Your confirmation code is below - enter it in your open browser window
//             and we'll help you get signed in.
//           </Text>

//           <Section style={codeBox}>
//             <Text style={confirmationCodeText}>{validationCode}</Text>
//           </Section>

//           <Text style={text}>
//             If you didn't request this email, there's nothing to worry about, you
//             can safely ignore it.
//           </Text>

//           <Section>
//             <Text style={text}>Connect with us</Text>
//             <Row style={footerLogos}>
//               <Column style={{ width: "66%" }}>
//                 <Img
//                   src={`${baseUrl}/static/slack-logo.png`}
//                   width="120"
//                   height="36"
//                   alt="Our Blog"
//                 />
//               </Column>
//               <Column>
//                 <Section>
//                   <Row>
//                     <Column>
//                       <Link href="/">
//                         <Img
//                           src={`${baseUrl}/static/slack-twitter.png`}
//                           width="32"
//                           height="32"
//                           alt="Policies"
//                           style={socialMediaIcon}
//                         />
//                       </Link>
//                     </Column>
//                     <Column>
//                       <Link href="/">
//                         <Img
//                           src={`${baseUrl}/static/slack-facebook.png`}
//                           width="32"
//                           height="32"
//                           alt="Help Center"
//                           style={socialMediaIcon}
//                         />
//                       </Link>
//                     </Column>
//                     <Column>
//                       <Link href="/">
//                         <Img
//                           src={`${baseUrl}/static/slack-linkedin.png`}
//                           width="32"
//                           height="32"
//                           alt="XCUXION Community"
//                           style={socialMediaIcon}
//                         />
//                       </Link>
//                     </Column>
//                   </Row>
//                 </Section>
//               </Column>
//             </Row>
//           </Section>

//           <Section>
//             <Link
//               style={footerLink}
//               href="https://slackhq.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Our blog
//             </Link>
//             &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//             <Link
//               style={footerLink}
//               href="https://slack.com/legal"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Policies
//             </Link>
//             &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//             <Link
//               style={footerLink}
//               href="https://slack.com/help"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Help center
//             </Link>
//             &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//             <Link
//               style={footerLink}
//               href="https://slack.com/community"
//               target="_blank"
//               rel="noopener noreferrer"
//               data-auth="NotApplicable"
//               data-linkindex="6"
//             >
//               Slack Community
//             </Link>
//             <Text style={footerText}>
//               ©2022 XCUXION Technologies, LLC, All rights reserved. <br />
//               500 Howard Street, San Francisco, Kumasi, Ghana<br />
//               <br />
//               All rights reserved.
//             </Text>
//           </Section>
//         </Container>
//       </Body>
//     </Html>
//   );

//   XcuxionConfirmEmail.PreviewProps = {
//     validationCode: "DJZ-TLX",
//   } as XcuxionConfirmEmailProps;

//   export default XcuxionConfirmEmail;

//   const footerText = {
//     fontSize: "12px",
//     color: "#b7b7b7",
//     lineHeight: "15px",
//     textAlign: "left" as const,
//     marginBottom: "50px",
//   };

//   const footerLink = {
//     color: "#b7b7b7",
//     textDecoration: "underline",
//   };

//   const footerLogos = {
//     marginBottom: "32px",
//     paddingLeft: "8px",
//     paddingRight: "8px",
//     width: "100%",
//   };

//   const socialMediaIcon = {
//     display: "inline",
//     marginLeft: "32px",
//   };

//   const main = {
//     borderShadaw:'opx 2px 6px rgba(0,0,0,0.1)',
//     border:'1px solid gray',
//     backgroundColor: "#ffffff",
//     margin: "0 auto",
//     fontFamily:
//       "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//   };

//   const container = {
//     margin: "0 auto",
//     padding: "0px 20px",
//   };

//   const logoContainer = {
//     marginTop: "32px",
//   };

//   const h1 = {
//     color: "#1d1c1d",
//     fontSize: "32px",
//     fontWeight: "700",
//     textAlign:'center' as const,
//     margin: "30px 0",
//     padding: "0",
//     lineHeight: "42px",
//   };

//   const heroText = {
//     fontSize: "18px",
//     lineHeight: "28px",
//     marginBottom: "30px",
//   };

//   const codeBox = {
//     background: "rgb(245, 244, 245)",
//     borderRadius: "4px",
//     marginBottom: "30px",
//     padding: "40px 10px",
//   };

//   const confirmationCodeText = {
//     fontSize: "28px",
//     textAlign: "center" as const,
//     verticalAlign: "middle",
//   };

//   const text = {
//     color: "#000",
//     fontSize: "15px",
//     lineHeight: "24px",
//   };

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
  validationCode?: number;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const XcuxionConfirmEmail = ({
  validationCode,
}: XcuxionConfirmEmailProps) => (
  <Html>
    <Head />
    <Preview>Confirm your email address</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src={`${baseUrl}/static/logo.png`}
            width="49"
            height="21"
            alt="Xcuxion Logo"
            style={tag}
          />
        </Section>
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
              <Text>The Xcuxion Team</Text>
              <Text>Accra, Ghana</Text>
            </Column>
          </Row>
        </Section>

        <Section>
          <Link
            style={footerLink}
            href="https://xcuxion.org"
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
  marginLeft:"8px",
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
};

const logoContainer = {
  marginTop: "32px",
};

const tag = {
  width: "150px",
  height: "80px",
};
const tagBase = {
  width: "80px",
  height: "50px",
};
const h1 = {
  color: "#1d1c1d",
  fontSize: "32px",
  fontWeight: "700",
  textAlign: "center" as const,
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
