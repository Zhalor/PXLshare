import styled from "styled-components";
import FollowerFollowed from './FollowerFollowed';

const FollowerFollowingList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

function FollowersFollowingList(props) {

  return (
    <FollowerFollowingList>
      {props.users.map(user => {
          return <FollowerFollowed user={user} />
        })}
    </FollowerFollowingList>
  )
}

export default FollowersFollowingList;