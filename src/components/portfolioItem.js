import React from 'react';
import styled from 'styled-components';

const PortItemWrapper = styled.div`
  display: table;
  height: 500px;
  position: relative;
  text-align: center;
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (min-width: 1660px) {
    width: 33.3%;
  }
`;

const Overlay = styled.div`
  background-color: transparent;
  background-image: -webkit-linear-gradient(
    318deg,
    rgba(69, 67, 61, 0.95),
    rgba(46, 46, 46, 0.9)
  );
  background-image: linear-gradient(
    132deg,
    rgba(69, 67, 61, 0.95),
    rgba(46, 46, 46, 0.9)
  );
  display: table-cell;
  opacity: 0;
  text-align: center;
  transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  vertical-align: middle;
  width: 100%;
  &:hover {
    opacity: 100;
  }

  @media screen and (max-width: 900px) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 300px;
    padding: 145px 0 15px 25px;
    background-image: -webkit-linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    opacity: 1;
    text-align: left;
  }
`;

const Title = styled.h1`
  color: #b0925a;
  font-size: 3.5rem;
  line-height: 3.5rem;
  padding-bottom: 10px;
  margin: 0;

  @media screen and (max-width: 900px) {
    font-size: 2.5rem;
    line-height: 2rem;
    margin: 0 0 6px 0;
    color: #fff;
  }
`;

const Subtitle = styled.h3`
  color: #fff;
  font-family: 'Source Sans Pro';
  line-height: 2rem;
  margin-top: 10px;
  text-transform: uppercase;
  font-size: 1.6rem;

  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
    font-family: 'Source Sans Pro';
    text-transform: uppercase;
    line-height: 2rem;
    color: #fff;
    margin-top: 20px;
  }
`;

const Divider = styled.div`
  background-color: #b0925a;
  display: block;
  height: 2px;
  margin-left: auto;
  margin-right: auto;
  width: 120px;

  @media screen and (max-width: 900px) {
    display: block;
    width: 120px;
    height: 2px;
    float: left;
    background-color: #b0925a;
  }
`;

const Button = styled.a`
  text-decoration: none;

  h6 {
    font-size: 1.8rem;
    padding: 20px;
    border: 2px solid white;
    width: 50%;
    margin: 15px auto 0;
    text-transform: uppercase;
    color: #fff;

    -webkit-transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.55);
      color: rgba(50, 50, 50, 1);
    }
  }

  @media screen and (max-width: 900px) {
    h6 {
      font-size: 1.6rem;
      padding: 10px;
      border: 2px solid white;
      width: 60%;
      margin: 20px auto 0;
      text-align: center;
      float: left;
    }
  }
`;

export default function PortfolioItem({ data }) {
  return (
    <PortItemWrapper
      style={{
        background: `url('${data.imgUrl}')`,
        backgroundSize: `cover`,
        backgroundPosition: `50% 50%`,
        backgroundRepeat: `no-repeat`,
        float: `left`,
      }}
    >
      <Overlay>
        <Title>{data.title}</Title>
        <Divider />
        <Subtitle>{data.subtitle}</Subtitle>
        <Button href={data.slug}>
          <h6>explore this project</h6>
        </Button>
      </Overlay>
    </PortItemWrapper>
  );
}
