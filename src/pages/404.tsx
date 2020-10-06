import React from 'react';

import { Container } from '@/styles/pages/NotFound';

const NotFound: React.FC = () => {
  return (
    <Container>
      <img src="/logo.png" alt="logo" />
      <h1>Página não encontrada. Você está perdido?</h1>
    </Container>
  );
};

export default NotFound;
