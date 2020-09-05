import React, { useState, useEffect } from 'react';
import { createContext } from 'vm';
import { AuthConfig } from './config';

interface AuthContextData {
    user: object | null;
}

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<Object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AuthConfig.auth().onAuthStateChanged((resp) => {
            setUser(resp);
            setLoading(false);
        })
    }, [])

    if(loading){
        return(
            <div>carregando . . .</div>
        )
    }

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}