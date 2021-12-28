import React from "react";
import styled from "styled-components";

function LoginPage() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          To get started with React Router in a web app, you’ll need a React web
          app. If you need to create one, we recommend you try Create React App.
          It’s a popular tool that works really well with React Router.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    background: url("/images/login-background.jpg") center center/cover
      no-repeat fixed;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  latter-spacing:1.5px;
  margin-top:8px;
  margin-bottom:12px

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
