import React from 'react';

export default function PizzaForm (){
    return(
        <form id='pizza-form'>
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
                    <label>Choice of Size
                        <p>{errors.size}</p>
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
                    <label>

                    </label>
                </div>
            </div>
        </form>
    )
}