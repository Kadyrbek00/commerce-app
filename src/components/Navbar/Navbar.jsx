import React from 'react'
import { Button } from '@mui/material'
import { BiLogIn } from 'react-icons/bi'
import { AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { auth } from '../../utils/firebase'
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
                <Link to={'/login'}>
                    <Button size='small' variant="outlined" className='login'>
                        <BiLogIn /> Login</Button>
                </Link>
                <Link to={'/registration'}>
                    <Button size='small' variant="outlined" className='signup'><AiOutlineUserAdd /> Register</Button>
                </Link>
                <Link to={'/favorites'}>
                    <Button size='small' variant="outlined" className='cart'><AiOutlineShoppingCart /> Cart({favorites.length})</Button>
                </Link>
                <Link to={'/'}>
                    <Button onClick={() => auth.signOut()} size='small' variant="outlined" className='cart'> Log Out</Button>
                </Link>
            </div>
        </nav>
    )
}
