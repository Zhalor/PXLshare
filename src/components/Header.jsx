import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UploadIcon from '../icons/UploadIcon';
import AccountIcon from '../icons/AccountIcon';
import LogoutIcon from '../icons/LogoutIcon';
import HomeIcon from '../icons/HomeIcon';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 80px;
`;

const LinksContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

function Header() {

  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
  });

  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledLink to={'/'}>
          <h1>PXLshare</h1>
        </StyledLink>
        <LinksContainer>

          {width > 600 ? 
            <Link to={'/upload'}>
              <UploadIcon />
            </Link> : 
            null}

          {width > 600 ? 
            <Link to={'/'}>
              <HomeIcon />
            </Link> : 
            null}

          <Link to={'/logout'}>
            <LogoutIcon />
          </Link>

          {width > 600 ? 
            <Link to={'/p/testUser'}>
              <AccountIcon />
            </Link> : 
            null}
          
        </LinksContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;
