import { useState } from "react";
import Comment from "./Comment";
import styled from "styled-components";

const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommentBtn = styled.button`
  width: fit-content;
  border: none;
  background-color: white;
  font-size: .8rem;
  color: #7a7a7a;

  &:hover {
    color: #525252;
    cursor: pointer;
  }
`;

function Comments(props) {

  const [showComments, setShowComments] = useState(false);

  function handleClick(bool) {
    setShowComments(bool);
  }

  return (
    <StyledComments>
      { 
        props.comments.length >= 2 && showComments === false ?
          <>
            <Comment comment={props.comments[0]} comments={props.comments} setComments={props.setComments} upload={props.upload} />
            <Comment comment={props.comments[1]} comments={props.comments} setComments={props.setComments} upload={props.upload} />
          </>
        :
          props.comments.map(comment => {
              return <Comment comment={comment} comments={props.comments} setComments={props.setComments} upload={props.upload} />
            })
      }
      {
        props.comments.length > 2 &&
          (!showComments ?
            <CommentBtn onClick={() => handleClick(true)}>Show All</CommentBtn>
          :
            <CommentBtn onClick={() => handleClick(false)}>Show Less</CommentBtn>)
      }
    </StyledComments>
  )
}

export default Comments;