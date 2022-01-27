import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import UserView from './views/UserView';
import Login from './components/LoginReg/Login';
import Register from './components/LoginReg/Register';
import Dashboard from './views/Dashboard';
import { RoomsView } from './views/RoomsView';
import { Header } from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <UserView>
        <Login/>
      </UserView>
      </Route>
      <Route exact path="/register">
      <UserView>
        <Register/>
      </UserView>
      </Route>
      <Route exact path="/DashBoard">
      <Header>
          <Dashboard/>
      </Header>
      </Route>
      <Route exact path="/:room">
        <Header>
        <RoomsView/>
        </Header>
        </Route>
    </Switch>
    </BrowserRouter>
    
  
  );
}

export default App;