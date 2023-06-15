import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import LikesBtn from './LikesBtn';
import Comments from './Comments';
import CommentInput from './CommentInput';
import { db, arrayRemove, updateDoc, doc, arrayUnion, deleteUpload } from '../firebase';
import { useContext, useState, useRef } from 'react';
import { UserContext } from '../RouteSwitch';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import {ReactComponent as CommentIcon} from '../icons/CommentIcon.svg';

const PostContainer = styled.div`
  display: flex;
  margin: 100px auto 0px auto;
  width: 1200px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  @media(max-width: 1000px) {
    flex-direction: column;
    width: 580px;
    margin-top: 30px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  padding: 10px 10px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ImageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > *:not(:last-child) {
    padding: 6px 10px;
  }
`

const StyledProfilePicture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const StyledImage = styled.img`
  width: 700px;
  border-radius: 4px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  flex-shrink: 0;

  @media(max-width: 1000px) {
    width: 580px;
  }
`;

const BoldFont = styled.p`
  font-weight: bold;
`
const StyledBtn = styled.button`
  background-color: rgb(0,92,152);
  border: 1px solid rgb(0, 65, 109);
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  font-weight: bold;
  font-size: 0.9rem;

  &:hover {
    background-color: rgb(0, 107, 179);
    cursor: pointer;
  }
`;

function Content() {

  const user = useContext(UserContext);
  const inputRef = useRef(null)
  const { upload, image, profilePicture, postLikes } = useLocation().state;
  const navigate = useNavigate();
  const [likes, setLikes] = useState(postLikes);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(upload.comments);
  const currentDate = new Date().getTime();
  const dateUploaded = upload.dateUploaded.seconds;
  const UploadToCurrentDateDifference = Math.trunc((currentDate/1000/60/60/24) - (dateUploaded/60/60/24));
  
  async function addComment() {
    if(comment.trim()) {
      try {
        await updateDoc(doc(db, 'users', upload.uid, 'Uploads', upload.docID), {
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

  async function toggleLike(isLiked) {
    if(isLiked) {
      await updateDoc(doc(db, 'users', upload.uid, 'Uploads', upload.docID), {
        likes: arrayRemove(user.uid)
      });
      setLikes(likes.filter(item => item !== user.uid));
      
    } else {
      await updateDoc(doc(db, 'users', upload.uid, 'Uploads', upload.docID), {
        likes: arrayUnion(user.uid)
      });
      setLikes([...likes, user.uid]);
    }
  }

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <Header />
      <PostContainer>
        <StyledImage src={image} />
        <ImageInfoContainer>
          <PostHeader>
            <div>
              <StyledProfilePicture src={profilePicture} />
              <StyledLink to={`/p/${upload.username}`} state={{uid: upload.uid}}><h2>{upload.username}</h2></StyledLink>
            </div>
            <div>
              <StyledBtn onClick={() => navigate(-1)}>Back</StyledBtn>
              {
                user.uid === upload.uid ?
                  <StyledBtn onClick={() => {deleteUpload(upload); navigate(-1)}}>Delete</StyledBtn>
                :
                  null
              }
            </div>
          </PostHeader>
          {upload.desc ? <BoldFont>{upload.desc}</BoldFont> : null}
          <Container>
          <LikesBtn likes={likes} image={upload} toggleLike={toggleLike} />
            <CommentIcon onClick={handleClick} />
          </Container>
          <BoldFont>{likes.length} {likes.length == 1 ? 'Like' : 'Likes '}</BoldFont>
          <p>Uploaded {UploadToCurrentDateDifference > 0 ? `${UploadToCurrentDateDifference} days ago` : 'today'}</p>
          <Comments comments={comments} setComments={setComments} upload={upload} commentsViewLimit={8} />
          <CommentInput inputRef={inputRef} addComment={addComment} setComment={setComment} comment={comment} />
        </ImageInfoContainer>
      </PostContainer>
      <Footer footerStyle={{position: 'absolute'}} />
    </>
  )
}

export default Content;
