import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 300px;
  border-radius: 6px;
  padding: 8px;
  font-size: 1.3rem;
  transition: background-color .5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ProfilePicture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

function FollowerFollowed(props) {
  return (
    <StyledLink to={`/p/${props.user.username}`} state={{uid: props.user.uid}}>
      <Container>
        <ProfilePicture src={props.user.profPic} alt="" />
        {props.user.username}
      </Container>
    </StyledLink>
  )
}

export default FollowerFollowed;