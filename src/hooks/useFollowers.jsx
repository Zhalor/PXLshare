import { useEffect, useState } from "react";
import { getFirebaseUserDoc } from "../firebase";

function useFollowers(uid) {
  const [followers, setFollowers] = useState();

  useEffect(() => {

    async function getFollowers() {
      try {
        const user = await getFirebaseUserDoc(uid);
        console.log(user.followers);
        setFollowers(user.followers);
      } catch (error) {
        console.log(error);
        return error;
      }
    }
    
    getFollowers();
  }, []);

  return [ followers ];
}

export { useFollowers };