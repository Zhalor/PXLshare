import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { db, collection, doc, getDocs, getDoc, setDoc, getAuth, storage, ref, getDownloadURL} from '../firebase';
import Header from './Header';
import Footer from './Footer';
import ProfileFollowers from './ProfileFollowers';
import ProfileFollowing from './ProfileFollowing';
import Gallery from './Gallery';
import GalleryImageContainer from './GalleryImageContainer';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../RouteSwitch';
import { useFollowers } from '../hooks/useFollowers';
import { useFollowing } from '../hooks/useFollowing';

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

  > div > p > span {
    font-weight: bold;
  }
`;

function ProfilePage() {
  const auth = getAuth();
  const user = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [bio, setBio] = useState('');
  const [images, setImages] = useState([]);
  const [followers] = useFollowers('TvRyKdtZOJVXbzsBWT8dNj2ZqI83');
  const [following] = useFollowing('TvRyKdtZOJVXbzsBWT8dNj2ZqI83');
  const [display, setDisplay] = useState('gallery');


  useEffect(() => {
    getProfileInfo();
    getUploads();
  }, []);

  async function getProfileInfo() {
    try {
      const snapshot = await getDoc(doc(db, user.displayName, 'UserInfo'));
      const profileInfo = snapshot.data();
      
      setUsername(profileInfo.username);
      setBio(profileInfo.bio);

      const path = await getDownloadURL(ref(storage, profileInfo.profilePictureURL || 'default/default-profile-picture.png'));

      setProfilePicture(path);
    } catch(error) {
      console.log(error);
    }
  }

  async function getUploads() {
    try {
      const snapshot = await getDocs(collection(db, user.displayName, 'Uploads', 'FileNames'));
      const arr = [];
      snapshot.docs.forEach(item => {
        const obj = item.data();
        arr.push(obj.filename);
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
            <h2 onClick={getUploads}>{username}</h2>
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
