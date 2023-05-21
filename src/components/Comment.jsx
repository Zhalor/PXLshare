import { useState, useEffect } from "react";
import { db, doc, getDoc } from "../firebase";
import styled from "styled-components";

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
  background-color: white;
  border: none;
  color: red;
`;

function Comment(props) {

  return (
    <StyledComment>
      <p><Username>{props.comment.username}</Username>: {props.comment.comment}</p>
      <DeleteBtn>X</DeleteBtn>
    </StyledComment>
  )
}

export default Comment;