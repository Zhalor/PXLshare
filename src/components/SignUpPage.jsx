import styled from 'styled-components';
import { getAuth, createUserWithEmailAndPassword, updateProfile, db, doc, setDoc } from '../firebase';
import Image from '../cog-outline.png';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginImage = styled.img`
  width: 256px;
  height: auto;
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
  gap: 8px;
  width: 400px;
  background-color: white;
  padding: 20px;
  border: 1px solid rgba(114, 114, 114, 0.2);
`;

const StyledLogo = styled(Logo)`
  text-align: center;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  outline: none;
`;

const LoginButton = styled.button`
  padding: 10px;
  color: white;
  background-color: #62b1e6;
  border: 1px solid lightblue;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
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

function SignUpPage() {

  async function createAccount() {
    const auth = getAuth();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    try {
      const userCreds = await createUserWithEmailAndPassword(auth, email, password);
      const updatedProfile = await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: 'default/default-profile-picture.png',
      });
      await setDoc(doc(db, auth.currentUser.displayName, 'UserInfo'), {
        bio: '',
        profilePictureURL: auth.currentUser.photoURL,
        username: auth.currentUser.displayName,
      });
      console.log(userCreds);
      console.log(updatedProfile);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <LoginImage src={Image} alt="" />
      <LoginContainer>
        <FormContainer>
          <StyledLogo>PXLshare</StyledLogo>
          <StyledInput type="text" placeholder='Username' id='username' required />
          <StyledInput type="email" placeholder='Email Address' id='email' required />
          <StyledInput type="password" placeholder='Password' id='password' required />
          <StyledInput type="password" placeholder='Confirm Password' id='confirm-password' required />
          <LoginButton type='button' onClick={createAccount}>Create Account</LoginButton>
        </FormContainer>
        <SignUpText>Already have an account? <StyledLink to={'/login'}>Login</StyledLink></SignUpText>
      </LoginContainer>
    </Container>
    
  )
}

export default SignUpPage;