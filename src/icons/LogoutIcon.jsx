import { getAuth, signOut } from "../firebase";

function LogoutIcon() {

  async function logout() {
    const auth = getAuth();
    try {
      await signOut(auth)
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={'36px'} height={'36px'} onClick={logout}>
      <path d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012 2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h9z"></path>
    </svg>
  )
}

export default LogoutIcon;
