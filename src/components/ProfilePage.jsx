import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { db, doc, getDoc, storage, ref, getDownloadURL, updateDoc, arrayUnion, arrayRemove, getFirebaseUserDoc, getFollowers, getFollowing, getUploads} from '../firebase';
import Header from './Header';
import Footer from './Footer';
import FollowersFollowingList from './FollowersFollowingList';
import Gallery from './Gallery';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../RouteSwitch';
import { useLocation } from 'react-router-dom';
import { ReactComponent as EditIcon } from '../icons/EditIcon.svg'
import { ReactComponent as CheckIcon } from '../icons/CheckIcon.svg'
import { ReactComponent as EditProfPicIcon } from '../icons/EditProfPicIcon.svg'
import { Link } from 'react-router-dom';
import LoadingProfile from './LoadingProfile';

const ProfileContainer = styled.div`
  margin: 30px auto;
  max-width: 960px;
`;

const AccountInfoContainer = styled.div`
  display: none;
  gap: 150px;
  padding: 0px 20px;
  max-width: 500px;
  align-items: center;

  @media(max-width: 700px) {
    padding: 50px;
    gap: 80px;
    margin: 0px auto;
  }
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const ProfPicContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  max-width: 350px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > p {
      width: 100px;
    }

    @media(max-width: 700px) {
      flex-direction: column;
      gap: 5px;
    }
  }

  input {
    padding: 3px;
  }

  > p:last-of-type {
    display: flex;
    gap: 5px;

    @media(max-width: 700px) {
      justify-content: center;
    }
  }
`;

const StyledEditIcon = styled(EditIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const StyledBtn = styled.button`
  margin-left: 20px;
  padding: 6px 12px;
  font-size: 1rem;
  background-color: rgb(0,92,152);
  border: 1px solid rgb(0, 65, 109);
  border-radius: 6px;
  color: white;

  &:hover {
    background-color: rgb(0, 107, 179);
    cursor: pointer;
  }
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  transition: opacity .25s;
  transition-timing-function: ease-in-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

function ProfilePage() {

  const user = useContext(UserContext);
  const { uid } = useLocation().state;
  const [footerStyle, setFooterStyle] = useState({});
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [bio, setBio] = useState('');
  const [images, setImages] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [currentUserFollowing, setCurrentUserFollowing] = useState([])
  const [display, setDisplay] = useState('gallery');
  const [editBio, setEditBio] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [accountInfoDisplay, setAccountInfoDisplay] = useState({});

  useEffect(() => {
    async function getCurrentUserFollowing() {
      const userDoc = await getFirebaseUserDoc(user.uid);
      setCurrentUserFollowing(userDoc.following);
    }

    getCurrentUserFollowing();
  }, []);

  useEffect(() => {
    setAccountInfoDisplay({display: 'none'});
    setImages([]);
    setIsLoading(true);
    setDisplay('gallery');
    getProfileInfo();
  }, [uid]);

  function onPageLoad() {
    if(window.innerHeight < document.body.scrollHeight) {
      setFooterStyle({position: 'sticky'});
    } else {
      setFooterStyle({position: 'absolute'});
    }
  }

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
      setIsLoading(false);
      setAccountInfoDisplay({display: 'flex'});
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
          image.imageInfo.likes.splice(index, 1);
        }
        return image;
      });
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

  async function toggleEditBio(bool) {
    if(bool) {
      await updateDoc(doc(db, 'users', user.uid), {
        bio: bio,
      });
      setEditBio(false);
    } else {
      setEditBio(true);
    }
  }


  function changeDisplay(disp) {
    setDisplay(disp);
  }

  return (
    <div onLoad={onPageLoad}>
      <Header />
      <ProfileContainer>
        {
          isLoading && <LoadingProfile />
        }
        <AccountInfoContainer style={accountInfoDisplay}>
          <ProfPicContainer>
            <ProfilePicture src={profilePicture} />
            <Link to={'/upload'} state={{profilePicture: true}}>
            <Overlay>
              <EditProfPicIcon />
            </Overlay>
            </Link>
          </ProfPicContainer>
          
          <InfoContainer>
            <div>
              <h2>{username}</h2>
              {
                currentUserFollowing.includes(uid) == true ?
                  <StyledBtn onClick={unfollowUser}>Unfollow</StyledBtn>
                :
                user.uid != uid ?
                  <StyledBtn onClick={followUser}>Follow</StyledBtn>
                :
                null
              }
            </div>
            <div>
              <p onClick={() => changeDisplay('gallery')}>
                <StyledSpan>{images.length}</StyledSpan> Photos
              </p>
              <p onClick={() => changeDisplay('followers')}>
                <StyledSpan>{followers.length}</StyledSpan> Followers 
              </p>
              <p onClick={() => changeDisplay('following')}>
                <StyledSpan>{following.length}</StyledSpan> Following
              </p>
            </div>
            {
              user.uid == uid ?
                (editBio ? 
                  <div>
                    <input type="text" onChange={(e) => setBio(e.target.value)} placeholder={bio} />
                    <StyledCheckIcon onClick={() => toggleEditBio(true)} />
                  </div>
                :
                  <p>{bio}<StyledEditIcon onClick={() => toggleEditBio(false)} /></p>)
              :
                <p>{bio}</p>
            }
 
          </InfoContainer>
        </AccountInfoContainer>
        {
          display === 'gallery' ?
            <Gallery images={images} toggleLike={toggleLike} profilePicture={profilePicture} />
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
      <Footer footerStyle={footerStyle} />
    </div>
  )
}

export default ProfilePage;
