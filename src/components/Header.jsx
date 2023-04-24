import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UploadIcon from '../icons/UploadIcon';
import AccountIcon from '../icons/AccountIcon';
import LogoutIcon from '../icons/LogoutIcon';
import HomeIcon from '../icons/HomeIcon';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
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

function Header(props) {

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>PXLshare</h1>
        <LinksContainer>

          {props.width > 600 ? 
            <Link to={'/upload'}>
              <UploadIcon />
            </Link> : 
            null}

          {props.width > 600 ? 
            <Link to={'/'}>
              <HomeIcon />
            </Link> : 
            null}

          <Link to={'/logout'}>
            <LogoutIcon />
          </Link>

          {props.width > 600 ? 
            <Link to={'/p/account'}>
              <AccountIcon />
            </Link> : 
            null}
          
        </LinksContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;
