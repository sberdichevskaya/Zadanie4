import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './App.css'
import {BrowserRouter, Route, Routes, redirect} from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./login/Login";
import {useSelector} from "react-redux";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)



    return (
        <BrowserRouter>

            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                        <Routes>
                            <Route path="/registration" element={<Registration/>}/>
                            <Route path="/authorization" element={<Login/>}/>
                            <redirect to="/authorization" element={<Login/>}/>
                        </Routes>
                            :
                            <Routes>
                                <Route exect path="/" element={<Disk/>}/>
                                <redirect to="/"/>
                        </Routes>
                    }

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;