import React, { useCallback } from 'react';
import { Container, Formulario, BackgroundContainer, AuthContainer, Title, Input, Button, LogoImg, VideoButton, Circle, Row, CheckBox, Subtitle, RoundButton } from '../Login/styles';
import { AuthConfig } from '../../auth/config';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import {FaUserCircle, FaPlay, FaGoogle, FaFacebookSquare} from 'react-icons/fa'
import {IoIosLock} from 'react-icons/io'
import {MdMailOutline} from 'react-icons/md'

const Register = ({history}: RouteComponentProps) => {

  const handleRegister = useCallback(
    async(event) => {
      event.preventDefault();
      
      const {email, senha} = event.target.elements;
      await AuthConfig.auth().createUserWithEmailAndPassword(email.value, senha.value);
      history.push("/");
    }, []
  )

  return (
    <Container>
    <BackgroundContainer>
      <LogoImg src={Logo}/>
      <Title style={{fontSize: 60, marginTop: 40}}>Learn to code.</Title>
      <Title style={{fontSize: 60}}>Interactively.</Title>
      <Title style={{fontSize: 60}}>For free.</Title>
      <VideoButton>
        <Circle>
          <FaPlay/>
        </Circle>  
          Watch demo
        </VideoButton>
      <Row style={{justifyContent: 'space-evenly', position: 'relative', top: '15%', alignItems:'center'}}>
        <Subtitle style={{fontSize:18}}>Home</Subtitle>
        <Subtitle style={{fontSize:18}}>Tour</Subtitle>
        <Subtitle style={{fontSize:18}}>Courses</Subtitle>
        <Subtitle style={{fontSize:18}}>Articles</Subtitle>
        <Subtitle style={{fontSize:18}}>Blog</Subtitle>
      </Row>
    </BackgroundContainer>
    <AuthContainer>
      <Title style={{fontSize: 25}}>Join oveer 25 million learners from around the globe</Title>
      <Subtitle style={{marginTop: 20, opacity: 0.6}}>Master the languages of the web: HTML, CSS and JavaScript. This path will prepare you to build basic websites and then interactive web apps.</Subtitle>
      <form onSubmit={handleRegister} style={{width:'100%', margin:0}}>
        <Formulario>
          <FaUserCircle style={{position:'relative', left:'-45%', top:27, color:'#f5f5f5', zIndex: 3} }/>
          <Input type="text" name="name" placeholder="Name"></Input>
          <MdMailOutline style={{position:'relative', left:'-45%', top:27, color:'#f5f5f5', zIndex: 3, marginTop: -16} }/>
          <Input type="email" name="email" placeholder="Email"></Input>
          <IoIosLock style={{position:'relative', left:'-45%', top:27, color:'#f5f5f5', marginTop: -16, zIndex: 3} }/>
          <Input type="password" name="senha" placeholder="Password"/>
          <Row style={{marginBottom: 20}}>
            <CheckBox type="checkbox"/>
            <Subtitle>I agree to all statements included in Terms of Use.</Subtitle>
          </Row>
          <Button type="submit">Start coding now</Button>
        </Formulario>
      </form>
      <Subtitle style={{opacity: 0.6, marginBottom:20}}>Or continue with these social profile</Subtitle>
      <Row>
        <RoundButton onClick={()=>{}}><FaGoogle style={{height:25, width:25}}/></RoundButton>
        <RoundButton onClick={()=>{}}><FaFacebookSquare style={{height:25, width:25}}/></RoundButton>
      </Row>
      <Title style={{fontSize: 14}}>
        Already a member ? 
        <a style={{color: '#5268f4', cursor:'pointer'}} onClick={() => history.push("/login")}> Login</a>
      </Title>
    </AuthContainer>          
  </Container>
  );
};

export default withRouter(Register);
