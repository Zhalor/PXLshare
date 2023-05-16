import styled from "styled-components";
import { getFirebaseUserDoc, getDownloadURL, ref, storage } from "../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 200px;
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
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

function FollowerFollowed(props) {

  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  useEffect(() => {
    async function getUserInfo() {
      const user = await getFirebaseUserDoc(props.uid);
      const image = await getDownloadURL(ref(storage, user.profilePictureURL || 'default/default-profile-picture.png'));
      setUsername(user.username);
      setProfilePicture(image)
    }

    getUserInfo();
  }, []);
  
  return (
    <StyledLink to={`/p/${username}`} state={{uid: props.uid, disp: 'gallery'}}>
      <Container>
        <ProfilePicture src={profilePicture} alt="" />
        {username}
      </Container>
    </StyledLink>
  )
}

export default FollowerFollowed;