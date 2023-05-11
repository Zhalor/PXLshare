import { useEffect, useState } from "react";
import { getFirebaseUserDoc } from "../firebase";

function useFollowing(uid) {
  const [following, setFollowing] = useState();

  useEffect(() => {

    async function getFollowing() {
      try {
        const user = await getFirebaseUserDoc(uid);
        console.log(user.following);
        setFollowing(user.following);
      } catch (error) {
        console.log(error);
        return error;
      }
    }
    
    getFollowing();
  }, []);

  return [ following ];
}

export { useFollowing };