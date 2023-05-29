import styled from 'styled-components';
import ContentCard from './ContentCard';
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
  const [following] = useFollowing(user.uid);
  const [folowingImages, setFollowingImages] = useState([]);

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
    setFollowingImages(arr);
  }

  return (
   <ContentContainer>
    {folowingImages.map(upload => {
      return <ContentCard upload={upload} />
    })}
   </ContentContainer>
  )
}

export default Content;
