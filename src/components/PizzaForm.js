import React from 'react';

export default function PizzaForm (props){

    const {
        values,
        submit,
        change,
        errors,
        disabled
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    } 

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const newValue = type === 'checkbox' ? checked : value
        change(name, newValue)
    }

    return(
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='form-container'>
                <h2>Build Your Own Pizza</h2>
                <div className='form-inputs'>
                    <div className='name-input'>
                        <label>
                            <h3>Enter Name</h3>
                            <p>{errors.name}</p>
                            <input 
                                id='name-input'
                                type='text'
                                name='name'
                                value={values.name}
                                onChange={onChange}
                            />
                        </label>   
                    </div>
                    <div className='size-input'>
                        <h3>Choice of Size</h3>
                        <p>{errors.size}</p>
                        <label>
                            <select
                                value={values.size}
                                onChange={onChange}
                                name='size'
                                id='size-dropdown'
                            >
                                <option value=''>Select</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                                <option value='xlarge'>XLarge</option>
                            </select>
                        </label>
                    </div>
                    
                    <div className='sauce-heading'>
                        <h3>Choice of Sauce</h3>
                        <p>{errors.sauce}</p>
                    </div>
                    <div className='sauce-list'>
                        <label>
                            <input 
                                type='radio'
                                name='sauce'
                                value='red'
                                onChange={onChange}
                                checked={values.sauce === 'red'}
                            />
                            Original Red
                        </label>
                        <label>
                            <input 
                                type='radio'
                                name='sauce'
                                value='garlic'
                                onChange={onChange}
                                checked={values.sauce === 'garlic'}
                            />
                            Garlic Ranch
                        </label>
                        <label>
                            <input 
                                type='radio'
                                name='sauce'
                                value='bbq'
                                onChange={onChange}
                                checked={values.sauce === 'bbq'}
                            />
                            BBQ Sauce
                        </label>
                        <label>
                            <input 
                                type='radio'
                                name='sauce'
                                value='alfredo'
                                onChange={onChange}
                                checked={values.sauce === 'alfredo'}
                            />
                            Spinach Alfredo
                        </label>
                    </div>
                    <div className='topping-header'>
                        <h3>Add Toppings</h3>
                        <p>Choose up to 5</p>
                    </div>
                    <div className='topping-list'>
                        <label>
                            <input 
                                type='checkbox'
                                name='pepperoni'
                                id='topping'
                                checked={values.pepperoni}
                                onChange={onChange}
                            />
                            Pepperoni
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                onChange={onChange}
                                id='topping'
                            />
                            Sausage
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='bacon'
                                checked={values.bacon}
                                onChange={onChange}
                                id='topping'
                            />
                            Canadian Bacon
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='chicken'
                                checked={values.chicken}
                                onChange={onChange}
                                id='topping'
                            />
                            Grilled Chicken
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='pineapple'
                                checked={values.pineapple}
                                onChange={onChange}
                                id='topping'
                            />
                            Pineapple
                        </label>
                    </div>
                    <div className='special-input'>
                        <h3>Special Requests</h3>
                        <label>
                            <input 
                                type='text'
                                id='special-text'
                                name='special'
                                value={values.special}
                                onChange={onChange}
                                placeholder="Anything else you'd like to add?"
                            />
                        </label>
                    </div>
                    <div className='submit'>
                        <input 
                            type='submit'
                            value='Add to Order'
                            id='order-button'
                            disabled={disabled}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}