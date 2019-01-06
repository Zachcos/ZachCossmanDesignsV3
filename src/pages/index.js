import React from "react"
import styled from "styled-components";

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
  <HeroWrapper>
    <p>this is a test</p>
  </HeroWrapper>
);
