import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from '../RouteSwitch';
import UploadIcon from '../icons/UploadIcon';
import AccountIcon from '../icons/AccountIcon';
import HomeIcon from '../icons/HomeIcon';

const StyledFooter = styled.div`
  position: sticky;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  background-color: white;
`;

function Footer() {

  const user = useContext(UserContext);
  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
  });

  if(width > 600) return null;

  return (
    <StyledFooter>
      <Link to={'/'}>
        <HomeIcon />
      </Link>
      <Link to={'/upload'}>
        <UploadIcon />
      </Link>
      <Link to={`/p/${user.displayName}`} state={{uid: props.uid, disp: 'gallery'}} >
        <AccountIcon />
      </Link>
    </StyledFooter>
  );
}

export default Footer;

