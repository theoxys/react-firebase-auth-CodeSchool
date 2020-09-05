import React, { useCallback, useState } from 'react';

import { Container, Formulario, BackgroundContainer, AuthContainer, Title, Input, Button, LogoImg, VideoButton, Circle, Row, CheckBox, Subtitle, RoundButton } from './styles';
import { AuthConfig, GoogleProvider, FacebookProvider } from '../../auth/config';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import {FaUserCircle, FaPlay, FaGoogle, FaFacebookSquare} from 'react-icons/fa'
import {IoIosLock} from 'react-icons/io'
import Swal from 'sweetalert2'
import ReactLoading from 'react-loading'

const Login = ({history}: RouteComponentProps) => {
  const [loading, setLoading] = useState(false);

  const handleGoogleAuth = useCallback(async()=>{
    try {
      var result = await AuthConfig.auth().signInWithPopup(GoogleProvider);
      alert(result.user);
      console.log(result.user);
    } catch (error) {
      alert(error);
    }
  }, [])

  const handleFacebookAuth = useCallback(async()=>{
    try {
      var result = await AuthConfig.auth().signInWithPopup(FacebookProvider);
      alert('Seja bem vindo ' + result.user?.displayName);
      console.log(result.user);
    } catch (error) {
      alert(error);
    }
  }, [])
  
  const handleLogin = useCallback(
    async(event) => {
      setLoading(true)
      event.preventDefault();
      
      const {email, senha} = event.target.elements;
      try {
        await AuthConfig.auth().signInWithEmailAndPassword(email.value, senha.value);
        history.push("/");
        setLoading(false)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
          customClass:{
            container: 'swal-container-class',
            confirmButton: 'swal-confirm-button-class',
          }}
        );
        console.log(error);
        setLoading(false);
      }
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
        {loading?
        <ReactLoading color={'white'} type={"bubbles"}/> : 
        <>
          <Title style={{fontSize: 25}}>Study time! Connect to continue learning</Title>
          <Subtitle style={{marginTop: 20, opacity: 0.6}}>Log in to access the best web development courses available online!</Subtitle>
          <form onSubmit={handleLogin} style={{width:'100%', margin:0}}>
            <Formulario>
              <FaUserCircle style={{position:'relative', left:'-45%', top:27, color:'#f5f5f5', zIndex: 3} }/>
              <Input type="email" name="email" placeholder="Email"></Input>
              <IoIosLock style={{position:'relative', left:'-45%', top:27, color:'#f5f5f5', marginTop: -16, zIndex: 3} }/>
              <Input type="password" name="senha" placeholder="Password"/>
              <Row style={{marginBottom: 20}}>
                <CheckBox type="checkbox"/>
                <Subtitle>Remember email and password.</Subtitle>
              </Row>
              <Button type="submit">Get in!</Button>
            </Formulario>
          </form>
          <Subtitle style={{opacity: 0.6, marginBottom:20}}>Or continue with these social profile</Subtitle>
          <Row>
            <RoundButton onClick={handleGoogleAuth}><FaGoogle style={{height:25, width:25}}/></RoundButton>
            <RoundButton onClick={handleFacebookAuth}><FaFacebookSquare style={{height:25, width:25}}/></RoundButton>
          </Row>
          <Title style={{fontSize: 14}}>
            Not a member yet ? 
            <a style={{color: '#5268f4', cursor:'pointer'}} onClick={() => history.push("/register")}> Sign up!</a>
          </Title>
        </>
        }
      </AuthContainer>          
    </Container>
  );
};

export default withRouter(Login);
