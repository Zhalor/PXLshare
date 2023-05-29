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

function LikesBtn(props) {

  const user = useContext(UserContext);

  return (
    <>
      {
        props.likes.includes(user.uid) ?
          <StyledLiked onClick={() => props.toggleLike(true)} />
        :
          <StyledLike onClick={() => props.toggleLike(false)} />
      }
    </>
  )
}

export default LikesBtn;