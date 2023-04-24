import styled from 'styled-components';
import UploadIcon from '../icons/UploadIcon';
import AccountIcon from '../icons/AccountIcon';
import HomeIcon from '../icons/HomeIcon';

const StyledFooter = styled.div`
  position: sticky;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  background-color: white;
`;

function Footer() {

  return (
   <StyledFooter>
    <HomeIcon />
    <UploadIcon />
    <AccountIcon />
   </StyledFooter>
  )
}

export default Footer;
