import React from "react"
import { graphql } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../imports/globalStyle";

import PortfolioItem from "../components/portfolioItem";

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

/******************************************************
PORTFOLIO SECTION
******************************************************/
const PortfolioWrapper = styled.div`
  background-attachment: fixed, scroll;
  background-color: #615464;
  background-size: cover;
  overflow: auto;
  width: 100%;
  clear: both;
`;

const PortfolioHead = styled.div`
  background: #6e6a67;
  padding: 5%;
  text-align: center;
  p {
    margin-top: 5rem;
  }
`;

/******************************************************
ABOUT SECTION
******************************************************/
const AboutWrapper = styled.div`
  background: #696c71;
  color: #e2e6e7;
  margin-bottom: -3px;
  overflow: auto;
  overflow: hidden;
  padding: 5%;
  text-align: center;
`;

export default ({ data }) => (
  <React.Fragment>
    <HeroWrapper>
      <div>
        <Logo src={`${logo}`} />
      </div>
        <ArrowDown src={`${arrowDown}`} />
    </HeroWrapper>
    <PortfolioWrapper>
      <PortfolioHead>
        <h1>Work</h1>
        <h3>My recent work</h3>
        <p>Check out a collection of my freelance work as a web designer and developer</p>
      </PortfolioHead>
      {data.allPortfolioDataJson.edges.map(item => {
        return <PortfolioItem key={item.node.id} data={item.node} />
      })}
    </PortfolioWrapper>
    <AboutWrapper>
      This is the about section!
    </AboutWrapper>
    <GlobalStyle />
  </React.Fragment>
);

export const query = graphql`
  query {
    allPortfolioDataJson {
      edges {
        node {
          id
          title
          subtitle
          imgUrl
          slug
        }
      }
    }
  }
`