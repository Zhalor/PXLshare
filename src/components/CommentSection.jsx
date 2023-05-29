import styled from "styled-components";
import Comments from "./Comments";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../RouteSwitch";
import { db, doc, getDoc, updateDoc, arrayUnion } from "../firebase";

const CommentField = styled.div`
  display: flex;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
`;

const CommentInput = styled.input`
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

function CommentSection(props) {

  const user = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      const data = await getDoc(doc(db, 'users', props.upload.uid, 'Uploads', props.upload.docID));
      const comments = data.data().comments;
      setComments(comments);
    }

    getComments();
  }, [])

  async function addComment() {
    if(comment.trim()) {
      console.log(comment)
      try {
        await updateDoc(doc(db, 'users', props.upload.uid, 'Uploads', props.upload.docID), {
          comments: arrayUnion({
            uid: user.uid,
            comment: comment,
            username: user.displayName
          })
        });
        setComments([...comments, {uid: user.uid, comment: comment, username: user.displayName}]);
        setComment('');
      } catch(error) {
        console.log(error);
      }
    }
    
  }  

  return (
    <>
      <Comments comments={comments} setComments={setComments} upload={props.upload} />
      <CommentField>
        <CommentInput type="text" placeholder='Add a comment...' onChange={(e) => setComment(e.target.value)} value={comment} ref={props.inputRef} />
        <PostBtn type='button' onClick={addComment}>Post</PostBtn>
      </CommentField>
    </>
  )
}

export default CommentSection;