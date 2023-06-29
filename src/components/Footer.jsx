import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../RouteSwitch';
import  { ReactComponent as UploadIcon } from '../icons/UploadIcon.svg'
import  { ReactComponent as HomeIcon } from '../icons/HomeIcon.svg'
import LogoutIcon from '../icons/LogoutIcon';
import { db, getDoc, doc, storage, ref, getDownloadURL} from '../firebase';

const StyledFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: white;
`;

const StyledProfilePicture = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

function Footer(props) {

  const user = useContext(UserContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [profPicture, setProfilePicture] = useState('');

  useEffect(() => {
    getProfilePicture();
  }, []);

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  async function getProfilePicture() {
    console.log(user.uid)
    const data = await getDoc(doc(db, 'users', user.uid));
    const profileInfo = data.data();
    const profPicturePath = await getDownloadURL(ref(storage, profileInfo.profilePictureURL));
    setProfilePicture(profPicturePath);
  }

  return (
    <>
    {
      windowWidth < 700 ?
      <StyledFooter style={props.footerStyle}>
        <Link to={'/'}>
          <HomeIcon />
        </Link>
        <Link to={'/upload'} state={{profilePicture: false}}>
          <UploadIcon />
        </Link>
        <Link to={`/login`}>
          <LogoutIcon />
        </Link>
      </StyledFooter>
      :
        null
    }
    </>
  );
}

export default Footer;

