import styled from "styled-components";
import GalleryImageContainer from "./GalleryImageContainer";

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

function Gallery(props) {
  return (
    <StyledGallery>
      {props.images.map(image => {
              return <GalleryImageContainer image={image} username={props.username} uid={props.uid} />
            })}
    </StyledGallery>
  )
}

export default Gallery;