import styled from "styled-components";
import Follower from './Follower';

const Follow = styled.div`
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
    <Follow>
      {props.followers.map(uid => {
          return <Follower uid={uid} />
        })}
    </Follow>
  )
}

export default ProfileFollowers;