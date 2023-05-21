import styled from 'styled-components';
import ContentCard from './ContentCard';
import { db, collection, doc, getDocs, getDoc, setDoc, getAuth, storage, ref, getDownloadURL, query, where } from '../firebase';
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

  // async function getFollowing() {
  //   try {
  //     const auth = getAuth();
  //     const followingList = await getDocs(collection(db, user.displayName, 'Following', 'Usernames'));
  //     const arr = [];

  //     followingList.docs.forEach(user => {
  //       const obj = user.data()
  //       arr.push(obj.username);
  //     });

  //     setFollowing(arr);
  //     console.log(following);
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }

  async function getFollowingImages() {
    const arr = [];
    for(let userID of following) {
      const uploads = await getDocs(collection(db, 'users', userID, 'Uploads'));
      uploads.docs.forEach(upload => {
        arr.push(upload.data());
      });
    }
    setFollowingImages(arr);
    // const arr = [];
    // let filenames = {};
    // for(let userID of following) {
    //   const uploadFileNames = await getDoc(doc(db, 'users', userID, 'Uploads', 'filenames'));
    //   console.log(userID)
    //   const data = uploadFileNames.data();
    //   filenames = data.filenames;
    // }
    // console.log(filenames, arr)
    // for(const [url, name] of Object.entries(filenames)) {
    //   arr.push({[url]: name});
    // }
    // setFollowingImages(arr);
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
    <div onClick={getFollowingImages}>
      hi
    </div>
    {folowingImages.map(upload => {
      return <ContentCard upload={upload} />
    })}
   </ContentContainer>
  )
}

export default Content;
