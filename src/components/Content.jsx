import styled from 'styled-components';
import ContentCard from './ContentCard';

const ContentContainer = styled.div`
  width: 500px;
  margin: 0px auto;
`;

function Content() {

  return (
   <ContentContainer>
    <ContentCard />
   </ContentContainer>
  )
}

export default Content;
