import { useState } from "react";
import Comment from "./Comment";
import styled from "styled-components";

const StyledComments = styled.div`
  display: flex;
  flex: 1;
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
  const [commentsViewLimit] = useState(props.commentsViewLimit);

  function handleClick(bool) {
    setShowComments(bool);
  }

  function renderComments() {
    const comments = [];
    for(let i = 0; i < commentsViewLimit; i++) {
      comments.push(<Comment comment={props.comments[i]} comments={props.comments} setComments={props.setComments} upload={props.upload} />);
    }

    return comments;
  }
  

  return (
    <StyledComments>
      { 
        props.comments.length > commentsViewLimit && showComments === false ?
          <>
            {
              renderComments()
            }
          </>
        :
          props.comments.map(comment => {
              return <Comment comment={comment} comments={props.comments} setComments={props.setComments} upload={props.upload} key={comment.comment} />
            })
      }
      {
        props.comments.length > commentsViewLimit &&
          (!showComments ?
            <CommentBtn onClick={() => handleClick(true)}>Show All</CommentBtn>
          :
            <CommentBtn onClick={() => handleClick(false)}>Show Less</CommentBtn>)
      }
    </StyledComments>
  )
}

export default Comments;