import React from "react"
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {box-sizing: border-box;}
  html {font-size: 62.5%;}
  .clear {clear: both;}
  .clearfix:after {
    clear: both;
    content: "";
    display: block;
  }

  body {
    font-family: 'Source Sans Pro' , sans-serif;
    font-size: 1.8rem;
    color: #303030;
    -webkit-font-smoothing: antialiased;
  }
  
  
  h1 {
    font-family: 'bebas_neuebold', sans-serif;
    font-weight: bold;
    font-size: 8.5rem;
    line-height: 7.5rem;
    margin-bottom: 25px;
  }
  
  h3 {
    font-family: 'bebas_neue_regularregular', sans-serif;
    font-weight: 500;
    font-size: 4rem;
    line-height: 4.5rem;
  }
  
  p {
    font-size: 2.1rem;
    line-height: 3rem;
  }

  @font-face {
    font-family: 'bebas_neuebold';
    src: url('/fonts/BebasNeue Bold-webfont.eot');
    src: url('/fonts/BebasNeue Bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/BebasNeue Bold-webfont.woff2') format('woff2'),
         url('/fonts/BebasNeue Bold-webfont.woff') format('woff'),
         url('/fonts/BebasNeue Bold-webfont.ttf') format('truetype'),
         url('/fonts/BebasNeue Bold-webfont.svg#bebas_neuebold') format('svg');
    font-weight: 900;
    font-style: bold;
  
  }
  
  @font-face {
    font-family: 'bebas_neue_regularregular';
    src: url('/fonts/BebasNeue Regular-webfont.eot');
    src: url('/fonts/BebasNeue Regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/BebasNeue Regular-webfont.woff2') format('woff2'),
         url('/fonts/BebasNeue Regular-webfont.woff') format('woff'),
         url('/fonts/BebasNeue Regular-webfont.ttf') format('truetype'),
         url('/fonts/BebasNeue Regular-webfont.svg#bebas_neue_regularregular') format('svg');
    font-weight: 500;
    font-style: normal;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
`

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
