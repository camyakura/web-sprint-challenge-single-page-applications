import React from 'react';
import {Link} from 'react-router-dom';


export default function Home () {
    return (
        <div className='home-container'>
            <img className='home-image' src='https://media.istockphoto.com/photos/fresh-homemade-pizza-margherita-picture-id1278998606?b=1&k=20&m=1278998606&s=170667a&w=0&h=BlXvVFfwLwD4ckIF_7sg_mis8ULaqy9sdPgA6grpSo4=' alt='pizza' />
            <Link to='/pizza'>
                <button id='order-pizza'>Order Pizza</button>
            </Link>
        </div>
    )
}