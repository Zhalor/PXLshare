import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from '../RouteSwitch';
import  { ReactComponent as UploadIcon } from '../icons/UploadIcon.svg'
import  { ReactComponent as HomeIcon } from '../icons/HomeIcon.svg'
import  { ReactComponent as AccountIcon } from '../icons/AccountIcon.svg'

const StyledFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  background-color: white;
`;

function Footer(props) {

  const user = useContext(UserContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
    {
      windowWidth < 600 ?
      <StyledFooter style={props.footerStyle}>
        <Link to={'/'}>
          <HomeIcon />
        </Link>
        <Link to={'/upload'} state={{profilePicture: false}}>
          <UploadIcon />
        </Link>
        <Link to={`/p/${user.displayName}`} state={{uid: user.uid, disp: 'gallery'}} >
          <AccountIcon />
        </Link>
      </StyledFooter>
      :
        null
    }
    </>
  );
}

export default Footer;

