import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    background-color: rgb(170, 170, 170);
  }

  50% {
    background-color: rgb(190, 190, 190);
  }

  100% {
    background-color: rgb(170, 170, 170);
  }
`;

const AccountInfoContainer = styled.div`
  display: flex;
  gap: 150px;
  padding: 0px 20px;
  max-width: 500px;
  align-items: center;

  @media(max-width: 700px) {
    padding: 50px;
    gap: 80px;
    margin: 0px auto;
  }
`;

const LoadingProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #b3b3b3;
  animation: ${pulse} 2s linear infinite;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  max-width: 350px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > p {
      width: 100px;
    }

    @media(max-width: 700px) {
      flex-direction: column;
      gap: 5px;
    }
  }

  input {
    padding: 3px;
  }

  > p:last-of-type {
    display: flex;
    gap: 5px;
  }
`;

const LoadingBlock = styled.div`
  width: 150px;
  height: 20px;
  background-color: #b3b3b3;
  border-radius: 12px;
  animation: ${pulse} 2s linear infinite;
`;



function LoadingProfile() {

  return (
    <AccountInfoContainer>
      <LoadingProfilePicture />
      <InfoContainer>
        <div>
        <LoadingBlock />
        </div>
        <div>
          <LoadingBlock />
          <LoadingBlock />
          <LoadingBlock />
        </div>
        <LoadingBlock />
      </InfoContainer>
  </AccountInfoContainer>
  )
}

export default LoadingProfile;