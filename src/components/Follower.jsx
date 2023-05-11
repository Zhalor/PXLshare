import styled from "styled-components";
import { getFirebaseUserDoc } from "../firebase";

function Followers(props) {
  const user = getFirebaseUserDoc(props.uid);
  
  return (
    <div>
      {props.uid}
    </div>
  )
}

export default Followers;