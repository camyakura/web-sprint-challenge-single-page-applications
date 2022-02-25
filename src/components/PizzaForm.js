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
                    <h3>Build Your Own Pizza</h3>
                    <label>Enter Name
                        <input 
                            id='name-input'
                            type='text'
                            name='name'
                            value={values.name}
                        />
                    </label>
                    <div>
                        <h3>Choice of Size</h3>
                        <p>{errors.size}</p>
                    </div>
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
                    <div>
                        <h3>Choice of Sauce</h3>
                        <p>{errors.sauce}</p>
                    </div>
                    <label>Original Red
                        <input 
                            type='radio'
                            name='sauce'
                            value='red'
                            onChange={onChange}
                            checked={values.sauce === 'red'}
                        />
                    </label>
                    <label>Garlic Ranch
                        <input 
                            type='radio'
                            name='sauce'
                            value='garlic'
                            onChange={onChange}
                            checked={values.sauce === 'garlic'}
                        />
                    </label>
                    <label>BBQ Sauce
                        <input 
                            type='radio'
                            name='sauce'
                            value='bbq'
                            onChange={onChange}
                            checked={values.sauce === 'bbq'}
                        />
                    </label>
                    <label>Spinach Alfredo
                        <input 
                            type='radio'
                            name='sauce'
                            value='alfredo'
                            onChange={onChange}
                            checked={values.sauce === 'alfredo'}
                        />
                    </label>
                    <div>
                        <h3>Add Toppings</h3>
                        <p>Choose up to 5</p>
                    </div>
                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input 
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label>Canadian Bacon
                        <input 
                            type='checkbox'
                            name='bacon'
                            checked={values.bacon}
                            onChange={onChange}
                        />
                    </label>
                    <label>Grilled Chicken
                        <input 
                            type='checkbox'
                            name='chicken'
                            checked={values.chicken}
                            onChange={onChange}
                        />
                    </label>
                    <label>Pineapple
                        <input 
                            type='checkbox'
                            name='pineapple'
                            checked={values.pineapple}
                            onChange={onChange}
                        />
                    </label>
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
                    <input 
                        type='submit'
                        value='Add to Order'
                        id='order-button'
                        disabled={disabled}
                    />
                </div>
            </div>
        </form>
    )
}