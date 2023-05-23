import Comment from "./Comment";
import styled from "styled-components";

const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

function Comments(props) {

  return (
    <StyledComments>
      {
        props.comments &&
        props.comments.map(comment => {
            return <Comment comment={comment} comments={props.comments} setComments={props.setComments} upload={props.upload} />
          })
      }
    </StyledComments>
  )
}

export default Comments;