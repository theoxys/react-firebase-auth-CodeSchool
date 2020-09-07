import React, { useContext, useState } from 'react';
import {AuthConfig} from '../../auth/config'
import { Container, Box, Column} from './styles';
import Header from '../../components/Header';
import { AuthContext } from '../../auth/authContext';
import UserCard from '../../components/UserCard';

const Home: React.FC = () => {
  const {user} = useContext(AuthContext);
  const usuario: any = user
  console.log(user)

  let fotoURL: any = AuthConfig.auth().currentUser?.photoURL

  return (
    <Container>
      <Header displayName={usuario?.displayName} photoUrl={usuario?.photoURL}></Header>
      <Box>
        <Column>
          <UserCard displayName={usuario?.displayName} photoUrl={fotoURL}/>
        </Column>
        <Column>
        
        </Column>
      </Box>
    </Container>
  );
};

export default Home;
