import styled from "styled-components";
import Comments from "./Comments";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../RouteSwitch";
import { db, doc, getDoc, updateDoc, arrayUnion } from "../firebase";

const CommentField = styled.div`
  display: flex;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
`;

const StyledCommentInput = styled.input`
  border: none;
  padding: 20px;
  flex: 1;
`;

const PostBtn = styled.button`
  background-color: white;
  border: none;
  padding: 20px;
  transition: border .5s;
  border: 1px solid white;

  &:hover {
    cursor: pointer;
    border: 1px solid rgb(223, 223, 223);
  }
`;

function CommentInput(props) {

  return (
      <CommentField>
        <StyledCommentInput type="text" placeholder='Add a comment...' onChange={(e) => props.setComment(e.target.value)} value={props.comment} ref={props.inputRef} />
        <PostBtn type='button' onClick={props.addComment}>Post</PostBtn>
      </CommentField>
  )
}

export default CommentInput;