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
  width: 100%;
  background: url(${bgIgm}) no-repeat center;
  height: 100vh;
  display: table;
  margin: 0;
  max-width: none;
  text-align: center;
  div {
    display: table-cell;
    vertical-align: middle;
    padding-bottom: 225px;
  }
`;

const Logo = styled.img`
  max-width: 75%;
`;

const ArrowDown = styled.img`
  position: absolute;
  bottom: 50px;
  left: 50%;
  margin-left: -40px;
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
