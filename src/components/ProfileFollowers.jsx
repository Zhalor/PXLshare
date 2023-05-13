import styled from "styled-components";
import Follower from './Follower';

const FollowerList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

function ProfileFollowers(props) {
  return (
    <FollowerList>
      {props.followers.map(uid => {
          return <Follower uid={uid} />
        })}
    </FollowerList>
  )
}

export default ProfileFollowers;