import * as React from 'react';
import { 
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface AnnouncementEmailProps {
  title: string;
  content: string;
  attachmentUrl?: string;
//   userName: string;
}

export const AnnouncementEmail = ({
  title,
  content,
  attachmentUrl,
//   userName,
}: AnnouncementEmailProps) => {
  const previewText = `New Announcement: ${title}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="`https://res.cloudinary.com/dskdr2jxd/image/upload/v1741379214/exe_black_cnonnq.png`"
            width="120"
            height="40"
            alt="Your Company"
            style={logo}
          />
          <Heading style={heading}>New Announcement</Heading>
          <Section style={section}>
            <Text style={greeting}>Hello there,</Text>
            <Text style={announcementTitle}>{title}</Text>
            <Text style={announcementContent}>
              {content.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Text>
            
            {attachmentUrl && (
              <Section style={attachmentSection}>
                <Text style={attachmentText}>
                  📎 This announcement includes an attachment.
                </Text>
                <Button
                  style={attachmentButton}
                  href={`https://xcuxion.org${attachmentUrl}`}
                >
                  View Attachment
                </Button>
              </Section>
            )}
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            © {new Date().getFullYear()} XCUXION School. All rights reserved.
            <br />
            <Link href="https://xcuxion.org/preferences" style={link}>
              Manage email preferences
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: '40px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #e8e8e8',
  borderRadius: '5px',
  margin: '0 auto',
  padding: '20px',
  width: '600px',
};

const logo = {
  margin: '0 auto 20px',
  display: 'block',
};

const heading = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const section = {
  padding: '20px',
};

const greeting = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '12px 0',
};

const announcementTitle = {
  color: '#333',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '20px 0 12px',
};

const announcementContent = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
};

const attachmentSection = {
  backgroundColor: '#f4f4f9',
  borderRadius: '4px',
  padding: '15px',
  margin: '20px 0',
};

const attachmentText = {
  fontSize: '14px',
  margin: '0 0 10px',
};

const attachmentButton = {
  backgroundColor: '#5c6ac4',
  borderRadius: '3px',
  color: '#fff',
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  width: 'auto',
};

const hr = {
  borderColor: '#e8e8e8',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '22px',
  textAlign: 'center' as const,
};

const link = {
  color: '#5c6ac4',
};

export default AnnouncementEmail;