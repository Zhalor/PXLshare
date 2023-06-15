import styled from "styled-components";
import GalleryImage from "./GalleryImage";

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
              return <GalleryImage image={image} toggleLike={props.toggleLike} profilePicture={props.profilePicture} />
            })}
    </StyledGallery>
  )
}

export default Gallery;