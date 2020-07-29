import React, { useState } from 'react';
import S from '../styles/S.Signup';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);

    const handleSubmit = (e) => {

        if (username === '') {
            e.preventDefault();
            setUsernameError('Pole username nie może byc puste!');
        } else if (username.length < 4) {
            e.preventDefault();
            setUsernameError('UserName musi mieć min 4 znaki!')
        } else if (/\s/.test(username)) {
            e.preventDefault();
            setUsernameError('UserName nie może zawierać białych znaków!')
        } else {
            setUsernameError('');
        }

        if (email === '') {
            e.preventDefault();
            setEmailError('Pole e-mail nie może byc puste!');
        } else if (/\s/.test(email)) {
            e.preventDefault();
            setEmailError('E-mail nie może zawierać białych znaków!')
        } else if (!/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email)) {
            e.preventDefault();
            setEmailError('Niepoprawny format adresu e-mail!')
        } else {
            setEmailError('');
        }

        if (password === '') {
            e.preventDefault();
            setPasswordError('Pole hasło nie może byc puste!');
        } else if (/\s/.test(password)) {
            e.preventDefault();
            setPasswordError('Hasło nie może zawierać białych znaków!')
        } else if ( !password.match(/.*[!,@,#,$,%]/) | !password.match(/.*[0-9]/) )  {
            e.preventDefault();
            setPasswordError('Hasło musi zawierać co najmniej jedną cyfrę i jeden specjalny znak z następujących: ! # @ $ %')
        } else {
            setPasswordError('');
        }

        if (confirmPassword !== password) {
            e.preventDefault();
            setConfirmPasswordError('Hasła nie są identyczne!');
        } else {
            setConfirmPasswordError('');
        }
    } 

    const changeUsername = (e) => {
        setUsername(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
        
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
        
    }

    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        
    }

    return (
        <div className="RegisterForm">
            <S.Form onSubmit={handleSubmit}>

                <S.Input onChange={changeUsername} value={username} type="text" placeholder="Nazwa użytkownika"/>
                <S.Div>{usernameError}</S.Div>

                <S.Input onChange={changeEmail} value={email} type="text" placeholder="Adres e-mail"/>
                <S.Div>{emailError}</S.Div>

                <S.Input onChange={changePassword} value={password} type="password" placeholder="Hasło"/>
                <S.Div>{passwordError}</S.Div>

                <S.Input onChange={changeConfirmPassword} value={confirmPassword} type="password" placeholder="Potwierdź hasło"/>
                <S.Div>{confirmPasswordError}</S.Div>

                <S.Button type="submit">Zarejestruj się</S.Button>
            </S.Form>
        </div>
    );
}

export default SignUp;