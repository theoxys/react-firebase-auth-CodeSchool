import React, { useState, useEffect } from 'react';
import { createContext } from 'vm';
import { AuthConfig } from './config';
import { Container } from '../pages/Login/styles';
import ReactLoading from 'react-loading'

interface AuthContextData {
    user: object | null;
}

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<Object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AuthConfig.auth().onAuthStateChanged((resp) => {
            AuthConfig.auth().currentUser?.reload();
            setUser(resp);
            setLoading(false);
        })
    }, [])

    if(loading){
        return(
            <Container style={{justifyContent: 'center', alignItems: 'center'}}>
                <ReactLoading color={'#5268f4'} type={'bubbles'}></ReactLoading>
            </Container>
        )
    }

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}