import React from 'react'
import { Button } from '@mui/material'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.css'

export default function Navbar() {
    const favorites = useSelector(state => state.favorites.favorites)
    return (
        <nav className='main_nav'>
            <h2 className="logo">
                MKC brand
            </h2>

            <div className="navbar">
                <Link to={'/'} >Home</Link>
                <Link to={'/products'} >Products</Link>
                <Link to={'/about'} >About</Link>
                <Link to={'/contact'} >Contact</Link>
            </div>

            <div className="buttons">
                <Link to={'/favorites'}>
                    <Button size='small' variant="outlined" className='cart'><AiOutlineShoppingCart /> Cart({favorites.length})</Button>
                </Link>
                <Link to={'/profile'}>
                    <Button size='small' variant="outlined" className='cart'>Profile</Button>
                </Link>
            </div>
        </nav>
    )
}
