import React from "react";
import styled from "styled-components";
import ImgSider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      <ImgSider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  padding: 0 calc(3.5vw + 5px);
  min-height: calc(100vh - 70px);
  position: relative;
  overflow-x: hidden;

  &:before {
    position: absolute;
    background: url("/images/home-background.png") center center/cover no-repeat
      fixed;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
