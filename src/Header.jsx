import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  background-color: whitesmoke;
  width: 100%;
  padding: 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>PXLshare</h1>
        <LinksContainer>
          <p>Home</p>
          <p>Upload</p>
          <p>Account</p>
          <p>Logout</p>
        </LinksContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;
