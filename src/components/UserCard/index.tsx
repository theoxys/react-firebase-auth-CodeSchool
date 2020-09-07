import React from 'react';

import { Container, Row, Cover, ProfileImage, ProfileName, ProfileImageEditButton, CoverEditButton} from './styles';
import { Title, Subtitle } from '../../pages/Login/styles';
import {TiEdit} from 'react-icons/ti';
import { url } from 'inspector';

interface UserData {
  displayName: string;
  photoUrl: string;
  coverUrl?: string;
}

const UserCard: React.FC<UserData> = ({displayName, photoUrl}) => {

  let urlCover: string = 'https://tokystorage.s3.amazonaws.com/images/default-cover.png'

  return (
    <Container>
      <Cover style={{backgroundSize: 'cover', backgroundImage: `url(${urlCover})`}}>
        <CoverEditButton>
          <TiEdit color={'white'} style={{margin: 5}}/>
          <Subtitle>Edit</Subtitle>
        </CoverEditButton>
      </Cover>
      <Row>
        <ProfileImage style={{
            backgroundImage: `url(${photoUrl})`,
            backgroundSize: 'cover'
           }}>
          <ProfileImageEditButton>
            <TiEdit color={'white'} style={{margin: 5}}/>
            <Subtitle>Edit</Subtitle>
          </ProfileImageEditButton>
        </ProfileImage>
      </Row>
      <ProfileName>{displayName}</ProfileName>
    </Container>
  );
};

export default UserCard;
