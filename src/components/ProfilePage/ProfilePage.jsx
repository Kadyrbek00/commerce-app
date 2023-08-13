import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../Slices/features/userSlice'
import { auth } from '../../utils/firebase'
import { Button } from '@mui/material'
import './ProfilePage.css'
import { Link } from 'react-router-dom'
import image from './person.jpg'

function ProfilePage() {
    const user = useSelector(selectUser)

    return (
        <section className='profile'>
            <h2 className='profile-title'>Edit Profile</h2>
            <div className='profile-content'>
                <img src={image} alt="person" />
                <div className="content">
                    <p>{user.email}</p>
                    <Link to={"/"}>
                        <Button onClick={() => auth.signOut()} variant="contained"  >Log Out</Button>
                    </Link>
                    <Link to={"/changePassword"}>
                        <div className='changePass'>Изменить пароль</div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProfilePage
