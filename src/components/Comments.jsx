import { useState, useEffect } from "react";
import { db, doc, getDoc } from "../firebase";
import Comment from "./Comment";
import styled from "styled-components";

const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

function Comments(props) {

  const [comments, setComments] = useState();

  useEffect(() => {
    async function getComments() {
      const data = await getDoc(doc(db, 'users', props.upload.uid, 'Uploads', props.upload.docID));
      const comments = data.data().comments;
      setComments(comments);
      console.log(comments[0].username)
    }

    getComments();
  }, [])

  

  return (
    <StyledComments>
      {
        comments &&
          comments.map(comment => {
            return <Comment comment={comment} />
          })
      }
    </StyledComments>
  )
}

export default Comments;