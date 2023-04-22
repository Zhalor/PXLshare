import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
`

function App() {

  return (
    <>
    <GlobalStyle />
    <Header />
    </>
  )
}

export default App;
