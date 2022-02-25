import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import Confirmation from './components/Confirmation'
import axios from 'axios';


  const initialPizzaValues = {
    name: '',
    size: '',
    sauce: '',
    pepperoni: false,
    sausage: false,
    bacon: false,
    chicken: false,
    pineapple: false,
    special: ''
  }

    const initialPizzaErrors = {
      name: '',
      size: '',
      sauce: ''
    }


export default function App () {

  const [pizzaValues, setPizzaValues] = useState(initialPizzaValues)
  const [pizzaErrors, setPizzaErrors] = useState(initialPizzaErrors)
  const [disabled, setDisabled] = useState(true)


  const inputChange = (name, value) => {
    setPizzaValues({...pizzaValues, [name]: value})
  }

  const pizzaSubmit = () => {
    const newPizza = {
      name:pizzaValues.name.trim(),
      size:pizzaValues.size,
      sauce:pizzaValues.sauce,
      pepperoni: pizzaValues.pepperoni,
      sausage: pizzaValues.sausage,
      bacon: pizzaValues.bacon,
      chicken: pizzaValues.chicken,
      pineapple: pizzaValues.pineapple,

    }
  } 

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
          <PizzaForm 
            values={pizzaValues}
            change={inputChange}
            submit={pizzaSubmit}
            disabled={disabled}
            errors={pizzaErrors}
          />
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </>

  );
}

