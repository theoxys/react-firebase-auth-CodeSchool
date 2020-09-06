import styled from 'styled-components';
import BgImage from '../../assets/bg.png'

export const Container = styled.div`
    flex-direction: row;
    display: flex;
    flex:1;
    height: 100%;
    width: 100%;
    background-color: #1c1e21;
`;

export const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const BackgroundContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    height: 100%;
    width: 60%;
    background-image: url(${BgImage});
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background-size: cover;
`;

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 75px;
    height: 100%;
    width: 40%;
    justify-content: center;
    align-items: center;
    background-color: #1c1e21;
`;

export const Title = styled.span`
    color: #fff;
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 700;
`;

export const Input = styled.input`
    border: 1px solid #2b2f33;
    border-radius: 5px;
    outline: 0;
    height: 40px;
    padding-left: 40px;
    background-color: transparent;
    color: white;
    margin-bottom: 20px;
    width: 100%;
    &:hover{
        border: 1px solid #5268f4;
    }
    &:focus{
        border: 1px solid #5268f4;
        background-color: #25272a;
    }
    contain: cover;
    transition-duration: 0.15s;
`;

export const Button = styled.button`
    height: 40px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    background-color: #5268f4;
    color:white;
    font-weight: 700;
    cursor: pointer;
    width: calc(100%);
    margin-bottom: 20px;

    &:hover{
        transform: scale(1.03);
        position: relative;
        bottom: 5px;
        box-shadow: 2px 2px 8px 0px rgba(82,104,244,0.50);
    }

    transition: all 0.15s;
`;

export const LogoImg = styled.img`
    contain: cover;
    width: 200px;
`;

export const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #2b2f33;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 10px;
    transition-duration: 0.3s;
`;

export const VideoButton = styled.button`
    margin-top: 30px;
    height: 70px;
    width: fit-content;
    border-radius: 200px;
    background-color: #1c1e21;
    color: white;
    cursor: pointer;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

    &:hover{
        background-color: #2b2f33;
        position: relative;
        box-shadow: 2px 2px 8px 0px rgba(43,47,51,0.5);
    }

    &:hover ${Circle}{
        background-color: #5268f4;
    }

    &:active{
        transition-duration: 0.5s;
        background-color: #424548;
    }

    transition-duration: 0.15s;
    animation-delay: 0.1s ease-in-out;
`;

export const CheckBox = styled.input`
    height: 15px;
    width: 15px;
    background-color: transparent;
    border: 1px solid #2b2f33;
    color: white;
    margin-right: 10px;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: #25272a;
    }
    &:focus{
        background-color: #5268f4;
    }

    transition: all 150ms;
`;

export const Subtitle = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: white;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;  
`;

export const RoundButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #2b2f33;
    justify-content: center;
    align-items: center;
    color: white;
    display: flex;
    cursor: pointer;
    margin-right: 20px;

    &:hover{
        background-color: #5268f4;
        border: 1px solid #5268f4;
        box-shadow: 2px 2px 8px 0px rgba(82,104,244,0.50);
    }

    transition: all 0.2s;
`;


