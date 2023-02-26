import React, {useState} from 'react';
import '../registration/registration.css'
import Input from "../../utils/input/input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/userLogin";


const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState('password');
    const [toggleIconClasses, setToggleIconClasses] = useState('toggle-icon-passive');
    const [toggleIcon, setToggleIcon] = useState('Сделать пароль видимым 👓');
    const [ripple, setRipple] = useState('');


    const togglePassInput = (e) => {
        if (type === 'password') {
            setType('text');
            setToggleIcon('Сделать пароль не видимым 🕶');
        } else {
            setType('password');
            setToggleIcon('Сделать пароль видимым 👓');
        }
    };

    const dispatch = useDispatch()

    return (
        <div className='registration'>
            <div className="registration__header">Авторизация</div>
            <Input value={login} setValue={setLogin} type="text" placeholder="Введите логин..."/>
            <Input value={password} setValue={setPassword} type={type} placeholder="Введите пароль..."/>
            <div className="span">
                <span onClick={togglePassInput}
                      className={`toggle ${toggleIconClasses}`}>
                {toggleIcon}
            </span>
            </div>
            <button className="registration__btn" onClick={() => dispatch(login(login, password))} >Войти</button>
        </div>
    );
};

export default Login;