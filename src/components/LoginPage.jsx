import styled from 'styled-components';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from '../firebase';

function App() {

  async function createAccount() {
    const auth = getAuth();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    try {
      const userCreds = await createUserWithEmailAndPassword(auth, email, password);
      const updatedProfile = await updateProfile(auth.currentUser, {
        displayName: username
      })
      console.log(userCreds);
      console.log(updatedProfile);
    } catch(e) {
      console.log(e);
    }
  }

  async function login() {
    const auth = getAuth();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    try {
      const userCreds = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCreds);
      console.log(userCreds.user);
    } catch(e) {
      console.log(e);
    }
  }

  async function getUserInfo() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(auth.currentUser);
      } else {
        console.log('Null');
      }
    });
  }

  async function logout() {
    const auth = getAuth();
    try {
      const signedOutUser = await signOut(auth)
      console.log(signedOutUser);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div>
        <input type="email" id='email' placeholder='email' />
        <input type="password" id='password' placeholder='password' />
        <input type="text" id='username' placeholder='username' />
        <button type='button' onClick={createAccount}>Create Account</button>
      </div>
      <div>
        <input type="email" id='emailLogin' />
        <input type="password" id='passwordLogin' />
        <button type='button' onClick={login}>Login</button>
      </div>
        <button onClick={getUserInfo}>Get user info</button>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default App;
