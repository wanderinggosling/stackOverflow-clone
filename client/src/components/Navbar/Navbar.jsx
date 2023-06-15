import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assets/logo.png'
import search_solid from '../../assets/search_solid.svg'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'




const Navbar = () => {
    var dispatch = useDispatch();
    var User = useSelector((state) => (state.currentUserReducer));

    const navigate = useNavigate();

    const handlelogout = () => {
        dispatch({type:'LOGOUT'});
        navigate('/');
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token
        if(token){
            const decodeToken = decode(token)
            if(decodeToken.exp *1000 <new Date().getTime()){
                    handlelogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])

    return (
        <nav className='main-nav'>
            <div className="navbar">
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} width='102' alt="logo" />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder='Search...'></input>
                    <img src={search_solid} width='18' className='search-icon' alt=""></img>
                </form>
                {
                    User === null ?
                        <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                        <>
                            <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white"><Link to='/' style={{ color: "white", textDecoration: "none" }}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                            <button className='nav-item nav-links' onClick={handlelogout}>Log out</button>
                        </>
                }
            </div>
        </nav>
    )
}

export default Navbar
