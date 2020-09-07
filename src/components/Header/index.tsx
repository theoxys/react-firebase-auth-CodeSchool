import React, { useCallback } from 'react';

import { Container, Avatar, RowLeft, RowRigth, RoundButton } from './styles';
import { Title, Button, Subtitle } from '../../pages/Login/styles';
import {HiOutlineLogout} from 'react-icons/hi'
import { AuthConfig } from '../../auth/config';

interface UserData{
  displayName: string;
  photoUrl: string;
}

const Header: React.FC<UserData> = ({displayName, photoUrl}) => {
  const handleLogOut = useCallback( async()=> {
    await AuthConfig.auth().signOut();
  }, [])

  return (
    <Container>
      <RowLeft>
        <RoundButton onClick={handleLogOut}> 
          <HiOutlineLogout style={{width:20,height:20, marginRight: 5}}/> 
          <Subtitle>Logout</Subtitle>
        </RoundButton>
      </RowLeft>
      <RowRigth>
          <Title>{displayName}</Title>
        <Avatar style={{backgroundImage: `url(${photoUrl})`, backgroundSize: 'cover'}}></Avatar>
      </RowRigth>
    </Container>
  );
};

export default Header;
