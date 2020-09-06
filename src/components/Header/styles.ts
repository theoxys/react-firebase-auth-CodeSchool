import styled from 'styled-components';

export const Container = styled.div`
    background-color: #1c1e21;
    width: 100%;
    height: 60px;
    border-bottom: 2px solid #2b2f33;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;
    background-color: white;
`;

export const RowLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    padding-left: 10px;
`;

export const RowRigth = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
`;