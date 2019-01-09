import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../imports/globalStyle";

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
  background:#252525;
  display: block;
  height: 75px;
  position: fixed;
  right:0;
  top:0;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  width: 75px;
  z-index:1000;
  &:hover { background: #955251; }
  &::before, &::after {
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
`;

const Title = styled.h1`
  font-family: "bebas_neue_regularregular", sans-serif;
  font-size: 3.75rem;
  font-weight: 500;
  line-height: 5.5rem;
  margin: 0;
  padding: 125px 0 0 0;
`;

const Subtitle = styled.h2`
  color: #945351;
  font-family: "bebas_neue_regularregular", sans-serif;
  font-size: 2.275rem;
  font-weight: 500;
`;

const Description = styled.p`
  margin: 40px auto 60px;
  width: 80%;
`;

const Image = styled.img`
  width: auto;
  max-width: 80%;
  margin: 0 auto 5rem;

  -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
`;

export default ({ data }) => {
  const path = data.allPortfolioDataJson.edges[0].node;
  console.log("this is my data: ", data)

  return (
    <React.Fragment>
      <DetailWrapper>
        <TopBar><ExitBtn /></TopBar>
        <Container>
          <Title>{path.title}</Title>
          <Subtitle>{path.subtitle}</Subtitle>
          <Description>I designed this site and it was fun.</Description>
          {path.assets.map(item => {
            return <Image src={item} alt="" />
          })}
        </Container>
      </DetailWrapper>
      <GlobalStyle />
    </React.Fragment>
  )
}

export const query = graphql`
  query findPostBySlug($slug: String!) {
    allPortfolioDataJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          title
          subtitle
          assets
        }
      }
    }
  }
`