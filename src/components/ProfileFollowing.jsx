import styled from "styled-components";
import Follower from './Follower';

const FollowingList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

function ProfileFollowing(props) {

  function getUserInfo() {
    
  }

  return (
    <FollowingList>
      {props.following.map(uid => {
          return <Follower uid={uid} />
        })}
    </FollowingList>
  )
}

export default ProfileFollowing;