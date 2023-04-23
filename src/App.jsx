import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    background-color: whitesmoke;
  }
`

function App() {

  return (
    <>
    <GlobalStyle />
    <Header />
    <Content />
    </>
  )
}

export default App;
