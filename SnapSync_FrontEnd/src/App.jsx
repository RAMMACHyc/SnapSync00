import React from 'react';
import HeaderComponent from './components/NavBar/HeaderComponent';
import { Container } from '@mui/material';
import "./App.css"
import { Provider } from 'react-redux';
import store from './redux/store';
import BgComponent from './components/FormComponent/BgComponent';
import HomePage from './pages/HomePage/HomePage';
import AuthComponent from './components/Auth/AuthComponent'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';




const App = () => {
  const isRegistered = localStorage.getItem('profile');
  return (
    <BrowserRouter>
      <Container maxWidth="xl" style={{ marginTop: '30px', position: "relative" }}>
        <BgComponent />
        <HeaderComponent />
        <Switch>
          <Route path="/" exact component={()=><Redirect to="/posts" />} />
          <Route path="/posts" exact component={HomePage} />
          <Route path="/auth" exact render={() => (
            isRegistered ? <Redirect to="/" /> : <AuthComponent />
          )} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

const appProvider = () => <Provider store={store}>
  <App />
</Provider>;

export default appProvider;