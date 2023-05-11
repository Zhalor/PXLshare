import styled from "styled-components";
import { getFirebaseUserDoc } from "../firebase";

function Following(props) {
  const user = getFirebaseUserDoc(props.uid);
  
  return (
    <div>
      {props.uid}
    </div>
  )
}

export default Following;