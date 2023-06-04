import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import  { ReactComponent as UploadIcon } from '../icons/UploadIcon.svg'
import  { ReactComponent as HomeIcon } from '../icons/HomeIcon.svg'
import  { ReactComponent as AccountIcon } from '../icons/AccountIcon.svg'
import LogoutIcon from '../icons/LogoutIcon';
import { UserContext } from '../RouteSwitch';
import { db, getDoc, doc} from '../firebase';
import Logo from './Logo';

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

const StyledInput = styled.input`
  padding: 5px;
  font-size: .9rem;

  &:focus + div {
    display: flex;
  }
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
  top: 35px;
  flex-direction: column;
  background-color: white;
  width: 200px;
  border: 1px solid rgba(114, 114, 114, 0.2);

  &:hover {
    display: flex;
  }
`;

const StyledSearchLink = styled(StyledLink)`
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  padding: 8px 0px;
  width: 100%;
  text-align: center;
  transition: background-color .5s;

  &:hover {
    background-color: rgba(231, 231, 231, 0.2);
  }
`

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
    const reg = new RegExp(`^${search}\w*`, 'ig');
    const searchList = users.filter(user => user.username.match(reg));
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
          <StyledInput type="text" onChange={(e) => handleChange(e.target.value)} />
          {
            userList.length > 0 ?
              <StyledUserList>
              {
                userList.map(user => {
                  return <StyledSearchLink to={`/p/${user.username}`} state={{uid: user.uid, disp: 'gallery'}}>{user.username}</StyledSearchLink>
                })
              }
            </StyledUserList>
          :
            null
          }
          
        </SearchBar>
        <LinksContainer>

          {width > 600 ? 
            <Link to={'/upload'} state={{profilePicture: false}}>
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
