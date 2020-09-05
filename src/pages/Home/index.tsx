import React from 'react';
import {AuthConfig} from '../../auth/config'
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Homer</h1>
      <button onClick={()=> AuthConfig.auth().signOut()}>SAIR</button>
    </Container>
  );
};

export default Home;
