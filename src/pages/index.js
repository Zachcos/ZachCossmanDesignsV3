import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from '../imports/globalStyle';
import PortfolioItem from '../components/portfolioItem';

import bgIgm from '../../static/images/bg_blur.jpg';
import logo from '../../static/images/zcd.svg';
import arrowDown from '../../static/images/arrowdown.svg';

/** ****************************************************
 HERO SECTION
***************************************************** */
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

/** ****************************************************
PORTFOLIO SECTION
***************************************************** */
const PortfolioWrapper = styled.div`
  background-color: #615464;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const PortfolioHead = styled.div`
  background: #6e6a67;
  padding: 10% 5%;
  text-align: center;
  width: 100%;
  p {
    margin-top: 5rem;
  }

  @media screen and (min-width: 1660px) {
    padding: 7%;
  }
`;

/** ****************************************************
ABOUT/CONTACT SECTION
***************************************************** */
const AboutContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .about,
  .contact {
    box-sizing: border-box;
    width: 50%;
    padding: 150px 45px;
    h2 {
      font-family: 'bebas_neue_regularregular', sans-serif;
      font-weight: 800;
      font-size: 7rem;
    }
    h3 {
      margin-bottom: 45px;
      font-size: 3rem;
    }
    p {
      margin-bottom: 5%;
    }
  }
  .about {
    color: #e2e6e7;
    background: #696c71;
  }
  .contact {
    background: #aaa39d;
    color: #4e5258;
    a {
      color: #303030;
      font-family: 'bebas_neue_regularregular', sans-serif;
      font-size: 2.5rem;
      text-decoration: none;
      transition: color 250ms;
      &:hover {
        color: #955251;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .about,
    .contact {
      padding: 100px 25px;
      width: 100%;
      h2 {
        font-size: 5rem;
      }
      h3 {
        font-size: 2.4rem;
      }
      p {
        margin-bottom: 5%;
        font-size: 18px;
      }
    }
  }
`;

export default function Index({ data }) {
  return (
    <>
      <HeroWrapper>
        <div>
          <Logo src={`${logo}`} />
        </div>
        <ArrowDown src={`${arrowDown}`} />
      </HeroWrapper>
      <PortfolioWrapper>
        <PortfolioHead>
          <h1>Work</h1>
          <p>A collection of my freelance design and development work</p>
        </PortfolioHead>
        {data.allPortfolioDataJson.edges.map(item => (
          <PortfolioItem key={item.id} data={item.node} />
        ))}
      </PortfolioWrapper>
      <AboutContactWrapper>
        <div className="about">
          <h2>Hey, I'm Zach.</h2>
          <h3>I design websites</h3>
          <p>I am an actor, musician, and freelance designer.</p>
          <p>
            I create unique sites for clients with a simple aesthetic based on
            clean design and good typography.
          </p>
        </div>
        <div className="contact">
          <h2>Get ahold of me.</h2>
          <h3>Are business cards still a thing?</h3>

          <p>
            Tell me about your next project at: <br />
            <a href="MAILTO:zachcos@gmail.com">Zachcos@gmail.com</a>
          </p>

          <p>
            Looking for my work as an actor? <br />
            <a
              href="http://www.zachcossman.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              zachcossman.com
            </a>
          </p>
        </div>
      </AboutContactWrapper>
      <GlobalStyle />
    </>
  );
}

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
`;
