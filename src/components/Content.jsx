import styled from 'styled-components';
import ContentCard from './ContentCard';
import Header from './Header';
import Footer from './Footer';
import { db, collection, getDocs } from '../firebase';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../RouteSwitch';
import { useFollowing } from '../hooks/useFollowing';

const ContentContainer = styled.div`
  width: 500px;
  margin: 0px auto;
`;

function Content() {

  const user = useContext(UserContext);
  const [footerStyle, setFooterStyle] = useState({});
  const [following] = useFollowing(user.uid);
  const [folowingImages, setFollowingImages] = useState([]);

    function onPageLoad() {
      if(window.innerHeight < document.body.scrollHeight) {
        setFooterStyle({position: 'sticky'});
      } else {
        setFooterStyle({position: 'absolute'});
      }
    }

  useEffect(() => {
    if(following) {
      getFollowingImages();
    }
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
          folowingImages.map(upload => {
            return <ContentCard upload={upload} />
          })
        }
      </ContentContainer>
      <Footer footerStyle={footerStyle} />
    </>
  )
}

export default Content;
