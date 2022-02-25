import React from "react";
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom'

export default function App () {
  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/'>Help</Link>
      </nav>

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

