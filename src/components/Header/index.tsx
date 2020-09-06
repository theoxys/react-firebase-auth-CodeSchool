import React, { useCallback } from 'react';

import { Container, Avatar, RowLeft, RowRigth } from './styles';
import { Title, Button, RoundButton } from '../../pages/Login/styles';
import {HiOutlineLogout} from 'react-icons/hi'
import { AuthConfig } from '../../auth/config';

const Header: React.FC = () => {
  const handleLogOut = useCallback( async()=> {
    await AuthConfig.auth().signOut();
  }, [])

  return (
    <Container>
      <RowLeft>
        <Title>Home</Title>
      </RowLeft>
      <RowRigth>
        <RoundButton style={{width:30,height:30}} onClick={handleLogOut}> <HiOutlineLogout style={{width:20,height:20}}/> </RoundButton>
        <Title>Matheus Ferreira</Title>
        <Avatar></Avatar>
      </RowRigth>
    </Container>
  );
};

export default Header;
