import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

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

export default ({ data }) => {
  const path = data.allPortfolioDataJson.edges[0].node;
  console.log("this is my data: ", data)

  return (
    <DetailWrapper>
      <TopBar><ExitBtn /></TopBar>
    </DetailWrapper>
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