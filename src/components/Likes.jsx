import styled from "styled-components";
import  { ReactComponent as Like } from '../icons/Like.svg'
import  { ReactComponent as Liked } from '../icons/Liked.svg'
import { useState,useContext } from "react";
import { UserContext } from "../RouteSwitch";
import { db, arrayRemove, arrayUnion, updateDoc, doc } from '../firebase';

const StyledLike = styled(Like)`
  transition: fill .5s;

  &:hover {
    fill: red;
    cursor: pointer;
  }
`;

const StyledLiked = styled(Liked)`
  fill: red;
  cursor: pointer;
`;

function Likes(props) {

  const user = useContext(UserContext);
  const [likes, setLikes] = useState(props.likes);

  async function toggleLike(isLiked) {
    if(isLiked) {
      await updateDoc(doc(db, 'users', props.uid, 'Uploads', props.docID), {
        likes: arrayRemove(user.uid)
      });
      setLikes(likes.filter(item => item !== user.uid));
      
    } else {
      await updateDoc(doc(db, 'users', props.uid, 'Uploads', props.docID), {
        likes: arrayUnion(user.uid)
      });
      setLikes([...likes, user.uid]);
    }
  }

  return (
    <>
      {
        likes.includes(user.uid) ?
          <StyledLiked onClick={() => toggleLike(true)} />
        :
          <StyledLike onClick={() => toggleLike(false)} />
      }
    </>
  )
}

export default Likes;