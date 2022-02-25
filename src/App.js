import React from "react";
// import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import Confirmation from './components/Confirmation'


export default function App () {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/'>Help</Link>
        </nav>
      </header>
      
      <Switch>
        <Route path='/pizza-confirmation'>
          <Confirmation />
        </Route>
        <Route path='/pizza'>
          <PizzaForm/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </>

  );
}

