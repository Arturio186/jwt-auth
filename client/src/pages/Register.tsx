import React from 'react';

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
                
                <button onClick={(event) => Submit(event)}>Войти</button>
            </form>
        </>
    )
}

export default Register;