import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { db, collection, doc, getDocs, getDoc, storage, ref, getDownloadURL, updateDoc, arrayUnion, arrayRemove, getFirebaseUserDoc, getFollowers, getFollowing, getUploads} from '../firebase';
import Header from './Header';
import Footer from './Footer';
import FollowersFollowingList from './FollowersFollowingList';
import Gallery from './Gallery';
import { useState, useEffect, useContext } from 'react';
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
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [currentUserFollowing, setCurrentUserFollowing] = useState([])
  const [display, setDisplay] = useState('gallery');

  useEffect(() => {
    async function getCurrentUserFollowing() {
      const data = await getFirebaseUserDoc(user.uid);
      setCurrentUserFollowing(data.following);
    }

    getCurrentUserFollowing();
  }, []);

  useEffect(() => {   
    getProfileInfo();
    setDisplay('gallery');
  }, [uid]);

  async function getProfileInfo() {
    try {
      const data = await getDoc(doc(db, 'users', uid));
      const profileInfo = data.data();
      const userFollowers = await getFollowers(uid);
      const userFollowing = await getFollowing(uid);
      const uploads = await getUploads(uid)
      const path = await getDownloadURL(ref(storage, profileInfo.profilePictureURL));

      setFollowers(userFollowers);
      setFollowing(userFollowing);
      setUsername(profileInfo.username);
      setBio(profileInfo.bio);
      setImages(uploads);
      setProfilePicture(path);
    } catch(error) {
      console.log(error);
    }
  }

  async function followUser() {
    await updateDoc(doc(db, 'users', user.uid), {
      following: arrayUnion(uid)
    });

    await updateDoc(doc(db, 'users', uid), {
      followers: arrayUnion(user.uid)
    });

    const path = await getDownloadURL(ref(storage, user.photoURL));
    setCurrentUserFollowing([...currentUserFollowing, uid]);
    setFollowers([...followers, {uid: user.uid, profPic: path, username: user.displayName}]);
  }

  async function unfollowUser() {
    await updateDoc(doc(db, 'users', user.uid), {
      following: arrayRemove(uid)
    });

    await updateDoc(doc(db, 'users', uid), {
      followers: arrayRemove(user.uid)
    });

    setCurrentUserFollowing(currentUserFollowing.filter(item => item !== uid));
    setFollowers(followers.filter(item => item.uid !== user.uid));
  }

  async function toggleLike(isLiked, loggedInUserUid, docID) {
    if(isLiked) {
      await updateDoc(doc(db, 'users', uid, 'Uploads', docID), {
        likes: arrayRemove(loggedInUserUid)
      });
      const newLikes = images.map(image => {
        if(image.imageInfo.docID == docID) {
          let index = image.imageInfo.likes.indexOf(loggedInUserUid);
          console.log(index)
          image.imageInfo.likes.splice(index, 1);
          console.log(index, image.imageInfo.docID)
        }
        return image;
      });
      console.log(newLikes);
      setImages(newLikes)
      
    } else {
      await updateDoc(doc(db, 'users', uid, 'Uploads', docID), {
        likes: arrayUnion(loggedInUserUid)
      });
      const newLikes = images.map(image => {
        if(image.imageInfo.docID == docID) {
          image.imageInfo.likes.push(loggedInUserUid);
        }
        return image;
      });
      setImages(newLikes);
    }
  }


  function changeDisplay(disp) {
    setDisplay(disp);
    console.log(images)
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
              {
                currentUserFollowing.includes(uid) == true ?
                  <button onClick={unfollowUser}>Unfollow</button>
                :
                user.uid != uid ?
                  <button onClick={followUser}>Follow</button>
                :
                null
              }
            </div>
            <div>
              <p onClick={() => changeDisplay('gallery')}>
                <span>{images.length}</span> Photos
              </p>
              <p onClick={() => changeDisplay('followers')}>
                <span>{followers.length}</span> Followers 
              </p>
              <p onClick={() => changeDisplay('following')}>
                <span>{following.length}</span> Following
              </p>
            </div>
            <p>{bio}</p>
          </InfoContainer>
        </AccountInfoContainer>
        {
          display === 'gallery' ?
            <Gallery images={images} toggleLike={toggleLike}/>
          :
          display === 'followers' ?
            <FollowersFollowingList users={followers} />
          :
          display === 'following' ?
            <FollowersFollowingList users={following} />
          :
          null
        }
      </ProfileContainer>
      <Footer />
    </>
  )
}

export default ProfilePage;
