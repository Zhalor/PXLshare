import styled from "styled-components";
import FollowerFollowed from './FollowerFollowed';

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
          return <FollowerFollowed uid={uid} />
        })}
    </FollowerList>
  )
}

export default ProfileFollowers;