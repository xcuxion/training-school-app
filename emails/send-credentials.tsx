import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface SendCredentialsProps {
  userFirstname?: string;
  resetPasswordLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const SendCredentials = ({
  userFirstname,
  resetPasswordLink,
}: SendCredentialsProps) => {
  return (
    <Html>
      <Head />
      <Preview>Dropbox reset your password</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/logo.png`}
            width="49"
            height="21"
            alt="Xcuxion Logo"
            style={tagBase}
          />
          <Section>
            <Text style={text}>Hi {userFirstname},</Text>
            <Text style={text}>
              We received a request to change the password for your student
              portal acoount. If this was you, you can set a new password by
              clicking the link below.
            </Text>
            <Button style={button} href={resetPasswordLink}>
              Reset password
            </Button>
            <Text style={text}>
              If you did not request a password change or do not wish to change
              your password, Please ignore this message and delete it.
            </Text>
            <Text style={text}>
              To keep your account secure, please don&apos;t share this email
              with anyone. For more tips on keeping your account safe, visit our
              Help Center{" "}
              <Link style={anchor} href="https://slack.com/help">
                more security tips.
              </Link>
            </Text>
            <Text style={text}>Thank you,</Text>
            <Text>The Xcuxion Team</Text>
            <Text>Accra, Ghana</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

SendCredentials.PreviewProps = {
  userFirstname: "{UserName}",
  resetPasswordLink: "https://dropbox.com",
} as SendCredentialsProps;

export default SendCredentials;

const tagBase = {
  width: "150px",
  height: "80px",
  marginBottom: "40px",
};

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const anchor = {
  textDecoration: "underline",
};
