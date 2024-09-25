import { env } from "@/lib/env";
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
  interface DefaultEmailProps {
    type?: string;
    username?: string;
    actionUrl?: string;
  }
  const DefaultEmail = ({ type, username, actionUrl }: DefaultEmailProps) => {
    const actionText =
      type === "register" ? "Confirm your account" : "Reset your password";
    const previewText =
      type === "register"
        ? "Confirm your account to get started!"
        : "Reset your password to continue.";
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Body style={mainStyle}>
          <Container style={containerStyle}>
            <Section>
              <Img
                src={"/icons/logo-black.svg"}
                alt="Logo"
                style={logoStyle}
              />
            </Section>
            <Section>
              <Text style={headingStyle}>Hello, {username}!</Text>
              <Text style={paragraphStyle}>
                {type === "register"
                  ? "Thank you for signing up! To start using your account, please confirm your email address by clicking the button below."
                  : "You requested a password reset. Click the button below to reset your password and continue using your account."}
              </Text>
            </Section>
            <Section>
              <Button href={actionUrl} style={buttonStyle}>
                {actionText}
              </Button>
            </Section>
            <Section>
              <Text style={paragraphStyle}>
                If you didn’t{" "}
                {type === "register"
                  ? "create an account"
                  : "request a password reset"}
                , please ignore this email.
              </Text>
            </Section>
            <Section>
              <Text style={footerStyle}>
                Best regards, <br />
                The Xatup Team
              </Text>
            </Section>
            <Section>
              <Link href={env("NEXT_PUBLIC_BASE_URL")} style={linkStyle}>
                Visit our website
              </Link>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default DefaultEmail;
  
  const mainStyle = {
    backgroundColor: "#f6f6f6",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };
  
  const containerStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };
  
  const logoStyle = {
    width: "100px",
    margin: "0 auto",
  };
  
  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333333",
  };
  
  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#666666",
    marginBottom: "20px",
  };
  
  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
  };
  
  const footerStyle = {
    fontSize: "14px",
    color: "#999999",
    marginTop: "40px",
  };
  
  const linkStyle = {
    color: "#007BFF",
    textDecoration: "none",
  };
  