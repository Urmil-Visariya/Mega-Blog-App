import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router'

function LogoutBtn() {

  const navigate = useNavigate();

    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout());
            navigate('/login');
        })
    }
  return (
    <button className='inline-bock font-bold px-6 py-2 duration-200 hover:bg-yellow-500 rounded-full' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn