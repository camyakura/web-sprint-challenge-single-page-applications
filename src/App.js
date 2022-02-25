import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import Confirmation from './components/Confirmation'
import axios from 'axios';
import schema from './validation/pizzaSchema'
import * as yup from 'yup';



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

  const [order, setOrder] = useState([])
  const [pizzaValues, setPizzaValues] = useState(initialPizzaValues)
  const [pizzaErrors, setPizzaErrors] = useState(initialPizzaErrors)
  const [disabled, setDisabled] = useState(true)

  const getPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
        setOrder(res.data)
        setPizzaErrors(initialPizzaErrors)
      })
      .catch(err => console.log(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setPizzaErrors({...pizzaErrors, [name]: ''}))
      .catch(err => setPizzaErrors({...pizzaErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
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
    getPizza(newPizza)
  } 

  useEffect(() => {
    schema.isValid(pizzaValues).then( valid => setDisabled(!valid))
  }, [pizzaValues])

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
          <Confirmation orders={order}/>
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

