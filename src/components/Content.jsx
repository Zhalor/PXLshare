import styled from 'styled-components';
import ContentCard from './ContentCard';
import { db, collection, doc, getDocs, getDoc, setDoc, getAuth, storage, ref, getDownloadURL } from '../firebase';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../RouteSwitch';

const ContentContainer = styled.div`
  width: 500px;
  margin: 0px auto;
`;

function Content() {

  const user = useContext(UserContext);
  const [following, setFollowing] = useState([]);
  const [folowingImages, setFollowingImages] = useState([]);
  
  useEffect(() => {
    getFollowing();
  }, [])

  useEffect(() => {
    getFollowingImages();
  }, [following]);

  async function getFollowing() {
    try {
      const auth = getAuth();
      const followingList = await getDocs(collection(db, user.displayName, 'Following', 'Usernames'));
      const arr = [];

      followingList.docs.forEach(user => {
        const obj = user.data()
        arr.push(obj.username);
      });

      setFollowing(arr);
      console.log(following);
    } catch(error) {
      console.log(error)
    }
  }

  async function getFollowingImages() {
    const arr = [];
    let obj = {}
    for(let user of following) {
      const uploadFileNames = await getDoc(doc(db, user, 'Uploads'));
      obj = uploadFileNames.data();
      
    }
    for(const [url, name] of Object.entries(obj.filenames)) {
      arr.push({[url]: name});
    }
    console.log(arr)
    setFollowingImages(arr);
  }


  // async function getUploads() {
  //   try {
  //     const auth = getAuth();
  //     const snapshot = await getDocs(collection(db, auth.currentUser.displayName, 'Uploads', 'FileNames'));
  //     const imageRef = ref(storage, `${auth.currentUser.displayName}/uploads`);
  //     const arr = [];
  //     snapshot.docs.forEach(item => {
  //       const obj = item.data();
  //       arr.push(obj.filename);
  //     });
  //     setImages(arr)
  //     console.log(images);
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }

  return (
   <ContentContainer>
    <div onClick={getFollowing}>
      hi
    </div>
    {folowingImages.map(upload => {
      return <ContentCard upload={upload} />
    })}
   </ContentContainer>
  )
}

export default Content;
