import React from "react";
import styled from "styled-components";

const PortItemWrapper = styled.div`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: table;
  float: left;
  height: 500px;
  position: relative;
  text-align: center;
  width: 50%;
  
  .overlay.tablecell {
    background-color: transparent;
    background-image: -webkit-linear-gradient(318deg, rgba(69, 67, 61, 0.95), rgba(46, 46, 46, 0.90));
    background-image: linear-gradient(132deg, rgba(69, 67, 61, 0.95), rgba(46, 46, 46, 0.90));
    opacity: 0;
	  transition: all 500ms ease;
    -webkit-transition: all 500ms ease;

    &:hover {
      opacity: 100;
    }
  }
  `;

  const Title = styled.h1`
    color: #b0925a;
    font-size: 3.5rem;
    line-height: 3.5rem;
    margin-bottom: 15px;
    margin: 0;
  `;

  const Subtitle = styled.h3`
		color: #fff;
		font-family: 'Source Sans Pro';
		line-height: 2rem;
		margin-top: 20px;
		text-transform: uppercase;
    font-size: 1.6rem;
  `;

  const Divider = styled.div`
    background-color: #b0925a;
    display: block;
    height: 2px;
    margin-left: auto;
    margin-right: auto;
    width: 120px;
  `;

  const Button = styled.a`
    text-decoration: none;

    h6 {
      font-size: 1.8rem;
      padding: 20px;
      border: 2px solid white;
      width: 50%;
      margin: 45px auto 0;
      text-transform: uppercase;
      color: #fff;

      -webkit-transition: all 0.25s ease-in-out;
      -moz-transition: all 0.25s ease-in-out;
      -o-transition: all 0.25s ease-in-out;
      transition: all 0.25s ease-in-out;

      &:hover {
        background: rgba(255,255,255,.55);
	      color: rgba(50,50,50,1);
      }
    }
  `;

export default () => (
  <PortItemWrapper>
    <div className="overlay tablecell">
      <Title>Project title</Title>
      <Divider />
      <Subtitle>project subtitle</Subtitle>
      <Button href="#">
        <h6>explore this project</h6>
      </Button>
    </div>
  </PortItemWrapper>
)