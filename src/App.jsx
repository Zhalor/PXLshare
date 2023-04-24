import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: whitesmoke;
  }
`

function App() {

  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
  });

  return (
    <>
    <GlobalStyle />
    <Header width={width} />
    <Content />
    {width < 600 ? 
      <Footer /> : 
      null}
    </>
  )
}

export default App;
