import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
`;

export const CoverEditButton = styled.div`
    width: 600px;
    height: 200px;
    background-color: black;
    border-radius: 15px;
    opacity: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    flex-direction: column;
`;

export const Cover = styled.div`
    width: 600px;
    height: 200px;
    background-color: #2B2F33;
    border-radius: 15px;
    cursor: pointer;
    z-index: 2;

    &:hover ${CoverEditButton}{
        opacity: 0.6;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    position: relative;
    top: -75px;
    width: fit-content;
`;

export const ProfileImageEditButton = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: black;
    opacity: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    z-index: 4;
    flex-direction: column;
`;

export const ProfileImage = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #2B2F33;
    border: 5px solid #1c1e21;
    display:flex;
    cursor: pointer;
    transition: all 0.3s;
    z-index: 3;
    &:hover ${ProfileImageEditButton}{
        opacity: 0.6;
    }

`;

export const ProfileName = styled.span`
    font-size: 22px;
    margin-left: 5px;
    font-weight: 700;
    color: white;
    text-align: left;
    position: relative;
    top: -140px;
    left: 170px;
`;