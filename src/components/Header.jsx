import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import  { ReactComponent as UploadIcon } from '../icons/UploadIcon.svg'
import AccountIcon from '../icons/AccountIcon';
import LogoutIcon from '../icons/LogoutIcon';
import HomeIcon from '../icons/HomeIcon';
import Logo from './Logo';
import { UserContext } from '../RouteSwitch';
import { db, getDoc, doc} from '../firebase';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  z-index: 1;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 80px;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

const StyledUserList = styled.div`
  display: none;
  position: absolute;
  top: 30px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: white;
  width: 181px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  padding: 6px;
`;

function Header() {

  const user = useContext(UserContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [userList, setUserList] = useState([]);

  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
  });

async function handleChange(search) {
  if(search.trim()) {
    const data = await getDoc(doc(db, 'users', 'userList'));
    const users = data.data().users;
    const reg = new RegExp(`${search}.*`, 'i');
    console.log(users, reg)
    const searchList = users.filter(user => user.username.match(reg));
    console.log(searchList);
    setUserList(searchList);
  } else {
    setUserList([]);
  }
}

  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledLink to='/'>
          <Logo>PXLshare</Logo>
        </StyledLink>
        <SearchBar>
          <input type="text" onChange={(e) => handleChange(e.target.value)} />
          <StyledUserList style={userList.length > 0 ? {display: 'flex'} : null}>
            {userList.map(user => {
                return <StyledLink to={`/p/${user.username}`} state={{uid: user.uid, disp: 'gallery'}}>{user.username}</StyledLink>
              })}
          </StyledUserList>
        </SearchBar>
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

          <Link to={'/login'}>
            <LogoutIcon />
          </Link>

          {width > 600 ? 
            <Link to={`/p/${user.displayName}`} state={{uid: user.uid, disp: 'gallery'}}>
              <AccountIcon />
            </Link> : 
            null}
          
        </LinksContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;
