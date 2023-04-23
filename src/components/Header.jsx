import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UploadIcon from '../icons/UploadIcon';
import AccountIcon from '../icons/AccountIcon';
import LogoutIcon from '../icons/LogoutIcon';
import HomeIcon from '../icons/HomeIcon';

const HeaderContainer = styled.div`
  background-color: white;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
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
  gap: 20px;
`

function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>PXLshare</h1>
        <LinksContainer>
          <Link to={'/'}>
            <HomeIcon />
          </Link>
          <Link to={'/upload'}>
            <UploadIcon />
          </Link>
          <Link to={'/p/account'}>
            <AccountIcon />
          </Link>
          <Link to={'/logout'}>
            <LogoutIcon />
          </Link>
        </LinksContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;
