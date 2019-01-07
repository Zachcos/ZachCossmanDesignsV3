import React from "react"
import styled from "styled-components";
import GlobalStyle from "../imports/globalStyle";

import bgIgm from '../../public/images/bg_blur.jpg';
import logo from '../../public/images/zcd.svg';
import arrowDown from '../../public/images/arrowdown.svg';

/******************************************************
HERO SECTION
******************************************************/
const HeroWrapper = styled.div`
  background: url(${bgIgm}) no-repeat center;
  display: table;
  height: 100vh;
  margin: 0;
  max-width: none;
  text-align: center;
  width: 100%;
  div {
    display: table-cell;
    padding-bottom: 225px;
    vertical-align: middle;
  }
`;

const Logo = styled.img`
  max-width: 75%;
`;

const ArrowDown = styled.img`
  bottom: 50px;
  left: 50%;
  margin-left: -40px;
  position: absolute;
`;

export default () => (
  <React.Fragment>
    <HeroWrapper>
      <div>
        <Logo src={`${logo}`} />
      </div>
        <ArrowDown src={`${arrowDown}`} />
    </HeroWrapper>
    <GlobalStyle />
  </React.Fragment>
);
