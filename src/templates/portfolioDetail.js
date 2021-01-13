import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from '../imports/globalStyle';

const DetailWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const TopBar = styled.div`
  background: #252525;
  height: 75px;
  left: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const ExitBtn = styled.div`
  background: #252525;
  display: block;
  height: 75px;
  position: fixed;
  right: 0;
  top: 0;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  width: 75px;
  z-index: 1000;
  &:hover {
    background: #955251;
  }
  &::before,
  &::after {
    background: #fff;
    border-radius: 3px;
    content: '';
    display: block;
    height: 3px;
    left: 50%;
    margin: -1px 0 0 -20px;
    position: absolute;
    top: 50%;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    width: 40px;
  }
  &::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &::after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 70%;
  text-align: center;

  @media screen and (max-width: 900px) {
    max-width: 90%;
  }
`;

const Title = styled.h1`
  font-family: 'bebas_neue_regularregular', sans-serif;
  font-size: 3.75rem;
  font-weight: 500;
  line-height: 5.5rem;
  margin: 0;
  padding: 125px 0 0 0;
`;

const Subtitle = styled.h2`
  color: #945351;
  font-family: 'bebas_neue_regularregular', sans-serif;
  font-size: 2.275rem;
  font-weight: 500;
`;

const Description = styled.p`
  margin: 40px auto 60px;
  width: 80%;

  @media screen and (max-width: 900px) {
    width: 90%;
    font-size: 1.8rem;
    line-height: 3rem;
  }
`;

const UrlLink = styled.a`
  font-size: 1.375em;
  font-family: 'bebas_neue_regularregular', sans-serif;
  color: #252525;
  text-transform: uppercase;
  text-decoration: underline;
  display: block;
  margin: 0 auto 60px;
  width: 100px;
  &:hover {
    color: #955251;
  }
`;

const Image = styled.img`
  width: auto;
  max-width: 80%;
  margin: 0 auto 5rem;

  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;

export default function PortfolioDetail({ data }) {
  const checkForUrl = () => {
    if (data.portfolioDataJson.liveUrl !== '') {
      return (
        <UrlLink
          href={data.portfolioDataJson.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Site
        </UrlLink>
      );
    }
  };

  const { title, subtitle, description, assets } = data.portfolioDataJson;

  return (
    <div>
      <DetailWrapper>
        <TopBar>
          <ExitBtn onClick={() => window.history.back()} />
        </TopBar>
        <Container>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
          {checkForUrl()}
          {assets.map(item => (
            <Image src={item} alt="" />
          ))}
        </Container>
      </DetailWrapper>
      <GlobalStyle />
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    portfolioDataJson(slug: { eq: $slug }) {
      slug
      liveUrl
      title
      subtitle
      description
      assets
    }
  }
`;
