import React from 'react';

const Login : React.FC = () => {
    const Submit = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

    }

    return (
        <>
            <h1>Авторизация</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" id="email" name="email"/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Пароль</label>
                    <input type="password" id="password" name="password"/>
                </div>
                
                <button onClick={(event) => Submit(event)}>Войти</button>
            </form>
        </>
    )
}

export default Login;