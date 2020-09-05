import React, { useContext, Component } from 'react';
import { RecordWithTtl } from 'dns';
import { RouteComponentProps, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './authContext';

interface PrivateRouteDAta{
    component: Component;
}

export const PrivateRoute = ({component, ...rest}:any) => {
    const { user } = useContext(AuthContext);
    
    const routeComponent = (props: any) => (
        user? React.createElement(component, props): <Redirect to="/login"/>
    )
    return(
        <Route
            {...rest}
            render={routeComponent}
        />
    )

}