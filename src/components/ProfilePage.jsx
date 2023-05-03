import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { db, collection, doc, getDocs, getDoc, setDoc, getAuth, storage, ref, getDownloadURL} from '../firebase';
import Header from './Header';
import Footer from './Footer';
import TestImage from '../portfolio.png';
import { useState } from 'react';
import { useEffect } from 'react';

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

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const GalleryImageContainer = styled.div`
  width: 300px;
  height: 300px;
`;

const GalleryImage = styled.img`
  width: 300px;
  height: 300px;
`;

function ProfilePage() {

  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [bio, setBio] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    getProfileInfo();
    getUploads();
  }, []);

  async function getProfileInfo() {
    try {
      const auth = getAuth();
      const snapshot = await getDoc(doc(db, auth.currentUser.displayName, 'UserInfo'));
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
      const auth = getAuth();
      const snapshot = await getDocs(collection(db, auth.currentUser.displayName, 'Uploads', 'FileNames'));
      const imageRef = ref(storage, `${auth.currentUser.displayName}/uploads`);
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
              <p><span>9</span> Photos</p>
              <p><span>11</span> Followers</p>
              <p><span>28</span> Following</p>
            </div>
            <p>{bio}</p>
          </InfoContainer>
        </AccountInfoContainer>
        <Gallery>
          <GalleryImageContainer>
            <GalleryImage src={TestImage} />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <GalleryImage src={TestImage} />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <GalleryImage src={TestImage} />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <GalleryImage src={TestImage} />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <GalleryImage src={TestImage} />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <GalleryImage src={TestImage} />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <GalleryImage src={TestImage} />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <GalleryImage src={TestImage} />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <GalleryImage src={TestImage} />
          </GalleryImageContainer>
        </Gallery>
      </ProfileContainer>
      <Footer />
    </>
  )
}

export default ProfilePage;
