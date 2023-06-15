import styled from 'styled-components';
import LikesBtn from './LikesBtn';
import { Link } from 'react-router-dom';

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  opacity: 0;
  width: 100%;
  height: 100%;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity .25s;
  transition-timing-function: ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

function GalleryImageContainer(props) {

  return (
    <ImageContainer>
      <Image src={props.image.path} />
      <Link to={`/post/${props.image.imageInfo.docID}`} state={{upload: props.image.imageInfo, image: props.image.path, profilePicture: props.profilePicture, postLikes: props.image.imageInfo.likes}}>
        <Overlay>
          <LikesBtn likes={props.image.imageInfo.likes} image={props.image.imageInfo} toggleLike={props.toggleLike} />
          {
            props.image.imageInfo.likes ?
              props.image.imageInfo.likes.length
            :
              0
          }
        </Overlay>
      </Link>
    </ImageContainer>
  )
}

export default GalleryImageContainer;
