import React from 'react';
import './navbar.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)


    return (
        <div className="navbar">
            <div className="container">
                {!isAuth && <div className="navbar__login"><NavLink to="/authorization">Войти</NavLink></div>}
                {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
            </div>
        </div>
    );
};

export default Navbar;