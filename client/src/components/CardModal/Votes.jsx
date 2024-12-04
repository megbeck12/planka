import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'semantic-ui-react';

const Container = styled.div`
  margin-left: 2rem;
  padding: 1rem;
`;

const Header = styled.div`
  font-size: small;
  color: #6f6f6f;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem !important;
`;

function Votes() {
  const [votes, setVotes] = useState(0);

  const handleClick = () => {
    setVotes((prevVotes) => (prevVotes ? prevVotes - 1 : prevVotes + 1));
  };

  const voteText = votes ? 'vote' : 'votes';

  return (
    <Container>
      <Header>Votes</Header>
      <StyledButton onClick={handleClick}>{`${votes} ${voteText}`}</StyledButton>
    </Container>
  );
}

export default React.memo(Votes);
