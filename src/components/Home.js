import React from 'react';
import {Link} from 'react-router-dom';


export default function Home () {
    return (
        <div className='home-container'>
            <img className='home-image' src='../../Assets/Pizza.jpg' alt='pizza' />
            <Link to='/pizza'>
                <button id='order-pizza'>Order Pizza</button>
            </Link>
        </div>
    )
}