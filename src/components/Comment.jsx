import { useState, useEffect, useContext } from "react";
import { db, doc, arrayRemove, updateDoc } from "../firebase";
import styled from "styled-components";
import { UserContext } from "../RouteSwitch";

const StyledComment = styled.div`
  display: flex;
  padding-right: 20px;

  > p {
    flex: 1;
  }
`;

const Username = styled.span`
  font-weight: bold;
`;

const DeleteBtn = styled.button`
  margin-left: auto;
  padding: 5px 8px;
  background-color: white;
  border: none;
  color: red;
  font-weight: bold;
  font-size: .8rem;
  text-align: center;
  border-radius: 6px;
  transition: all .5s;

  &:hover {
    background-color: red;
    color: white;
  }
`;

function Comment(props) {

  const user = useContext(UserContext);

  async function deleteComment() {
    await updateDoc(doc(db, 'users', props.upload.uid, 'Uploads', props.upload.docID), {
      comments: arrayRemove({
        uid: user.uid,
        comment: props.comment.comment,
        username: user.displayName
      })
    });
    props.setComments(props.comments.filter(item => item !== props.comment));
  }

  return (
    <StyledComment>
      <p><Username>{props.comment.username}</Username>: {props.comment.comment}</p>
      <DeleteBtn onClick={deleteComment}>X</DeleteBtn>
    </StyledComment>
  )
}

export default Comment;