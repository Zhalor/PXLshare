import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { db, collection, doc, getDocs, getDoc, storage, ref, getDownloadURL} from '../firebase';
import Header from './Header';
import Footer from './Footer';
import ProfileFollowers from './ProfileFollowers';
import ProfileFollowing from './ProfileFollowing';
import Gallery from './Gallery';
import { useState, useEffect, useContext } from 'react';
import { useFollowers } from '../hooks/useFollowers';
import { useFollowing } from '../hooks/useFollowing';
import { UserContext } from '../RouteSwitch';
import { useLocation } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: whitesmoke;
  }
`
const ProfileContainer = styled.div`
  margin: 30px auto;
  max-width: 960px;
`;

const AccountInfoContainer = styled.div`
  display: flex;
  gap: 150px;
  padding: 0px 20px;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  > div {
    display: flex;
    gap: 40px;
  }

  > div > button {
    padding: 6px 12px;
    font-size: 1rem;
    background-color: #2370ff;
    border: 1px solid lightblue;
    border-radius: 6px;
    color: white;
  }

  > div > p > span {
    font-weight: bold;
  }
`;

function ProfilePage() {

  const user = useContext(UserContext);
  const { uid } = useLocation().state;
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [bio, setBio] = useState('');
  const [images, setImages] = useState([]);
  const [followers] = useFollowers(uid);
  const [following] = useFollowing(uid);
  const [display, setDisplay] = useState('gallery');


  useEffect(() => {
    getProfileInfo();
    getUploads();
    setDisplay('gallery');
  }, [uid]);

  async function getProfileInfo() {
    try {
      const data = await getDoc(doc(db, 'users', uid));
      const profileInfo = data.data();
      
      setUsername(profileInfo.username);
      setBio(profileInfo.bio);

      const path = await getDownloadURL(ref(storage, profileInfo.profilePictureURL));

      setProfilePicture(path);
    } catch(error) {
      console.log(error);
    }
  }

  async function getUploads() {
    try {
      const snapshot = await getDocs(collection(db, 'users', uid, 'Uploads'));
      const arr = [];
      snapshot.docs.forEach(item => {
        const obj = item.data();
        arr.push(obj);
      });
      setImages(arr)
      console.log(images);
    } catch(error) {
      console.log(error)
    }
  }

  function handleClick(disp) {
    setDisplay(disp);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <ProfileContainer>
        <AccountInfoContainer>
          <ProfilePicture src={profilePicture} />
          <InfoContainer>
            <div>
              <h2 onClick={getUploads}>{username}</h2>
              {user.uid != uid ?
                <button>Follow</button>
              :
                null}
            </div>
            <div>
              <p onClick={() => handleClick('gallery')}><span>{images.length}</span> Photos</p>
              <p onClick={() => handleClick('followers')}>
                <span>{followers && followers.length}</span> Followers 
              </p>
              <p onClick={() => handleClick('following')}><span>{following && following.length}</span> Following</p>
            </div>
            <p>{bio}</p>
          </InfoContainer>
        </AccountInfoContainer>
        {display === 'gallery' ?
        <Gallery images={images} username={username} />
        : display === 'followers' ?
        <ProfileFollowers followers={followers} />
        : display === 'following' ?
        <ProfileFollowing following={following} />
        : null}
      </ProfileContainer>
      <Footer />
    </>
  )
}

export default ProfilePage;
