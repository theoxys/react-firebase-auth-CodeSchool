import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { AuthProvider } from './auth/authContext';
import { PrivateRoute } from './auth/AuthRoute';
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <PrivateRoute exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </BrowserRouter>
    </AuthProvider>
    <GlobalStyles/>
    </>
  );
}

export default App;
