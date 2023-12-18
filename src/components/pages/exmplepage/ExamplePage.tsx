import FormWithItsAtoms from '@/components/molecules/formWithItsAtoms/FormWithItsAtoms';
import React from 'react';
import styled from 'styled-components';

const ExamplePage = () => {
  return (
    <body>
      <Container>
        <FormWithItsAtoms />
      </Container>
    </body>
  );
};

export default ExamplePage;

const Container = styled.div``;
