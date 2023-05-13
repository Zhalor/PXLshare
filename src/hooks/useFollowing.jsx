import { useEffect, useState } from "react";
import { getFirebaseUserDoc } from "../firebase";

function useFollowing(uid) {
  const [following, setFollowing] = useState();

  useEffect(() => {

    async function getFollowing() {
      try {
        const user = await getFirebaseUserDoc(uid);
        setFollowing(user.following);
      } catch (error) {
        return error;
      }
    }
    
    getFollowing();
  }, []);

  return [ following ];
}

export { useFollowing };