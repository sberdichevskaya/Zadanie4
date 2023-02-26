import React, {useState} from 'react';
import './registration.css'
import Input from "../../utils/input/input";
import {registration} from "../../actions/user";

const Registration = () => {
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

    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Input value={login} setValue={setLogin} type="text" placeholder="Придумайте логин..."/>
                <Input value={password} setValue={setPassword} type={type} placeholder="Придумайте пароль..."/>
                <div className="span">
                <span onClick={togglePassInput}
                      className={`toggle ${toggleIconClasses}`}>
                {toggleIcon}
            </span>
                </div>
            <button className="registration__btn" onClick={() => registration(login, password)}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;