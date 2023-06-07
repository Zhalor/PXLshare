import styled from 'styled-components';
import { getAuth, createUserWithEmailAndPassword, updateProfile, db, doc, setDoc, updateDoc, arrayUnion } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  > p:last-of-type {
    text-align: center;
    margin: 15px 0px 6px 0px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 400px;
  background-color: white;
  padding: 20px;
  border: 1px solid rgba(114, 114, 114, 0.2);
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  outline: none;
`;

const SignUpBtn = styled.button`
  padding: 10px;
  color: white;
  background-color: #62b1e6;
  border: 1px solid lightblue;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(.99);
  }
`;

const SignUpText = styled.p`
  padding: 15px;
  background-color: white;
  border: 1px solid rgba(114, 114, 114, 0.2);
  font-size: .9rem;
  text-align: center;
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  color: #1b34c4;
  text-decoration: none;
  font-weight: bold;
`;

const PasswordError = styled.span`
  color: red;
  font-size: .8rem;
  font-weight: bold;
`;

function SignUpPage() {

  let navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function checkValidity(e) {
    if(e.validity.patternMismatch) {
      e.setCustomValidity('Username can contain letters, numbers, and a underscores.');
      return false;
    } else {
      e.setCustomValidity('');
      return true;
    }
  }

  async function createAccount(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if(password === confirmPassword) {
      try {
        const auth = getAuth();
    
          await createUserWithEmailAndPassword(auth, email, password);
          await updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: 'default/default-profile-picture.png',
          });
          await setDoc(doc(db, 'users', auth.currentUser.uid), {
            bio: '',
            followers: [],
            following: [],
            profilePictureURL: auth.currentUser.photoURL,
            username: auth.currentUser.displayName,
            uid: auth.currentUser.uid,
          });
          await updateDoc(doc(db, 'users', 'userList'), {
            users: arrayUnion({
              uid: auth.currentUser.uid,
              username: auth.currentUser.displayName,
            })
          })
          navigate('/');
      } catch(error) {
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <LoginContainer>
        <FormContainer onSubmit={(e) => createAccount(e)}>
          <Logo>PXLshare</Logo>
          <StyledInput onInput={(e) => checkValidity(e.target)} type="text" placeholder='Username' id='username' pattern='^[\w]+$' maxLength={16} required />
          <StyledInput type="email" placeholder='Email Address' id='email' required />
          {
            password === confirmPassword ?
              null
            :
              <PasswordError>*Passwords do not match</PasswordError>
          }
          <StyledInput type="password" placeholder='Password' id='password' minLength={6} maxLength={12} onChange={(e) => setPassword(e.target.value)} required />
          <StyledInput type="password" placeholder='Confirm Password' id='confirm-password' minLength={6} maxLength={12} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <SignUpBtn type='submit'>Create Account</SignUpBtn>
        </FormContainer>
        <SignUpText>Already have an account? <StyledLink to={'/login'}>Login</StyledLink></SignUpText>
      </LoginContainer>
    </Container>
    
  )
}

export default SignUpPage;