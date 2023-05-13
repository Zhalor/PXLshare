import styled from "styled-components";
import { getFirebaseUserDoc } from "../firebase";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const FollowerLink = styled(Link)`
  color: black;
  text-decoration: none;
`

function Followers(props) {

  const [user, setUser] = useState();
  useEffect(() => {
    async function getUser() {
      const data = await getFirebaseUserDoc(props.uid);
      setUser(data);
    }

    getUser();
  }, []);

  return (
    <div>
      <FollowerLink to={`/p/${props.uid}`} state={{uid: props.uid}}>{user && user.username}</FollowerLink>
    </div>
  )
}

export default Followers;