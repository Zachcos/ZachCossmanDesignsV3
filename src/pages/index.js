import React from "react"
import styled from "styled-components";
import GlobalStyle from "../imports/globalStyle";

const HeroWrapper = styled.div`
  background: darkred;
  width: 100%;
  height: 250px;
  margin: 0;
  padding: 0;
  p {
    margin: 0;
    padding: 0;
    color: white;
  }
`;

export default () => (
  <React.Fragment>
    <HeroWrapper>
      <h1>Let's see about this</h1>
      <p>this is a test</p>
    </HeroWrapper>
    <GlobalStyle />
  </React.Fragment>
);
