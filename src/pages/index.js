import React from "react"
import { graphql } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../imports/globalStyle";

import PortfolioItem from "../components/portfolioItem";

import bgIgm from '../../public/images/bg_blur.jpg';
import logo from '../../public/images/zcd.svg';
import arrowDown from '../../public/images/arrowdown.svg';
import headshot from "../../public/images/zcoss.jpg";

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

const AboutMe = styled.div`
  float: left;
  padding: 3%;
  width: 60%;
  p {
    margin: 5% 0;
  }
`;

const Headshot = styled.img`
  border-radius: 50%;
  max-width: 400px;
  width: 40%;
`;

/******************************************************
CONTACT SECTION
******************************************************/
const ContactWrapper = styled.div`
  background: #aaa39d;
  color: #4e5258;
  padding: 7% 5% 5% 5%;
  text-align: center;
  width: 100%;
  h3 {
    margin: -25px 0 45px 0;
    font-size: 3rem;
  }
  p {
    margin-bottom: 5%;
  }
  a {
    font-family: 'bebas_neue_regularregular', sans-serif;
    font-size: 3rem;
    text-decoration: none;
    color: #303030;
    transition: color 250ms;
    &:hover {
      color: #955251;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
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
      <AboutMe>
        <h1>Hey, I'm Zach.</h1>
        <h3>I design websites</h3>
        <p>I am an actor, musician, and freelance designer.</p>
        <p>I create unique sites for clients with a simple aesthetic based on clean design and good typography.</p>
      </AboutMe>
      <Headshot src={headshot} />
    </AboutWrapper>
    <ContactWrapper>
      <h1>Get ahold of me.</h1>
      <h3>Are business cards still a thing?</h3>

      <p>To talk about building your next project, email me at: <br />
        <a href="MAILTO:zachcos@gmail.com">Zachcos@gmail.com</a>
      </p>

      <p>Looking for my work as actor? Visit: <br />
        <a href="http://www.zachcossman.com" target="_blank">zachcossman.com</a>
      </p>
    </ContactWrapper>
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