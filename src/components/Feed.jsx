import styled from 'styled-components';
import Post from './Post';
import Header from './Header';
import Footer from './Footer';
import { db, collection, getDocs, getFirebaseUserDoc } from '../firebase';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../RouteSwitch';
import LoadingCard from './LoadingCard';

const ContentContainer = styled.div`
  width: 500px;
  margin: 0px auto;
`;

function Feed() {

  const user = useContext(UserContext);
  const [footerStyle, setFooterStyle] = useState({});
  const [cardDisplay, setCardDisplay] = useState({});
  const [following, setFollowing] = useState([]);
  const [folowingImages, setFollowingImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function onPageLoad() {
    setCardDisplay({display: 'flex'});
    if(window.innerHeight < document.body.scrollHeight) {
      setFooterStyle({position: 'sticky'});
    } else {
      setFooterStyle({position: 'absolute'});
    }
    setIsLoading(false);
  }

  useEffect(() => { 
    async function getFollowing() {
      try {
        const userDoc = await getFirebaseUserDoc(user.uid);
        setFollowing(userDoc.following);
      } catch (error) {
        return error;
      }
    }
    
    getFollowing();
  }, [user]);

  useEffect(() => {
    getFollowingImages();
  }, [following]);

  async function getFollowingImages() {
    const arr = [];
    for(let userID of following) {
      const uploads = await getDocs(collection(db, 'users', userID, 'Uploads'));
      uploads.docs.forEach(upload => {
        arr.push(upload.data());
      });
    }
    const sortedByNewest = arr.toSorted((first, second) => second.dateUploaded.seconds - first.dateUploaded.seconds);
    setFollowingImages(sortedByNewest);
  }

  return (
    <>
      <Header />
      <ContentContainer onLoad={onPageLoad}>
        {
          isLoading && <LoadingCard />
        }
        {
          folowingImages.map(upload => {
            return <Post upload={upload} cardDisplay={cardDisplay} key={upload.docID} />
          })
        }
      </ContentContainer>
      <Footer footerStyle={footerStyle} />
    </>
  )
}

export default Feed;
