import React from 'react';
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from '#utils/consts';

const Register : React.FC = () => {
    const Submit = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
    }
    
    return (
        <>
            <h1>Регистрация</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" id="email" name="email"/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Пароль</label>
                    <input type="password" id="password" name="password"/>
                </div>
                
                <button onClick={(event) => Submit(event)}>Зарегистрироваться</button>
            </form>
            <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
        </>
    )
}

export default Register;