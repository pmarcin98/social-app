import React, { useState } from 'react';
import S from '../styles/S.Signup';
import F from '../styles/F.Form';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);
    const [register, setRegister] = useState(null);


    const handleSubmit = (e) => {
        
        let usernameErrorTmp = null;
        if (username === '') {
            e.preventDefault();
            usernameErrorTmp=('Pole username nie może byc puste!');
        } else if (username.length < 4) {
            e.preventDefault();
            usernameErrorTmp=('UserName musi mieć min 4 znaki!');
        } else if (/\s/.test(username)) {
            e.preventDefault();
            usernameErrorTmp=('UserName nie może zawierać białych znaków!');
        } 
            
            setUsernameError(usernameErrorTmp);
        

        let emailErrorTmp = null;
        if (email === '') {
            e.preventDefault();
            emailErrorTmp = ('Pole e-mail nie może byc puste!');
        } else if (/\s/.test(email)) {
            e.preventDefault();
            emailErrorTmp = ('E-mail nie może zawierać białych znaków!');
        } else if (!/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email)) {
            e.preventDefault();
            emailErrorTmp = ('Niepoprawny format adresu e-mail!');
        } 
            setEmailError(emailErrorTmp);
        

        let passwordErrorTmp = null;
        if (password === '') {
            e.preventDefault();
            passwordErrorTmp =('Pole hasło nie może byc puste!');
        } else if (/\s/.test(password)) {
            e.preventDefault();
            passwordErrorTmp =('Hasło nie może zawierać białych znaków!');
        } else if ( !password.match(/.*[!,@,#,$,%]/) | !password.match(/.*[0-9]/) )  {
            e.preventDefault();
            passwordErrorTmp = ('Hasło musi zawierać co najmniej jedną cyfrę i jeden specjalny znak z następujących: ! # @ $ %');
        } 
            setPasswordError(passwordErrorTmp);
        

        let confirmPasswordErrorTmp = null;
        if (confirmPassword !== password) {
            e.preventDefault();
            confirmPasswordErrorTmp =('Hasła nie są identyczne!');
        } 
            setConfirmPasswordError(confirmPasswordErrorTmp);
        

        if ( (usernameErrorTmp === null) &&
            (emailErrorTmp === null) &&
            (passwordErrorTmp === null) &&
            (confirmPasswordErrorTmp === null) ) {
                
                let newUser = {
                    username: username,
                    email: email,
                    password: password,
                }
                
                const headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
                
                axios.post(
                        'http://akademia108.pl/api/social-app/user/signup', 
                        JSON.stringify(newUser),
                        { 'headers': headers })
                    .then((req) => {
                        
                        if( (req.data.signedup) === true){
                            setRegister(`Poprawna rejestracja użytkownika: ${username}!`);
                            setUsername('');
                            setEmail('');
                            setPassword('');
                            setConfirmPassword('');
                            setTimeout("location.href = '/login';",1000);
                        }
                        //req.data.user.username :)      
                
                        console.log(req.data);  
                    }).catch((error) => {
                        console.error(error);
                    })
                e.preventDefault();
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

            <F.Form onSubmit={handleSubmit}>

                <h2>Zarejestruj się, aby korzytać z Twittera:</h2>

                <F.Input onChange={changeUsername} value={username} type="text" placeholder="Nazwa użytkownika"/>
                <S.Div>{usernameError}</S.Div>

                <F.Input onChange={changeEmail} value={email} type="text" placeholder="Adres e-mail"/>
                <S.Div>{emailError}</S.Div>

                <F.Input onChange={changePassword} value={password} type="password" placeholder="Hasło"/>
                <S.Div>{passwordError}</S.Div>

                <F.Input onChange={changeConfirmPassword} value={confirmPassword} type="password" placeholder="Potwierdź hasło"/>
                <S.Div>{confirmPasswordError}</S.Div>

                <F.Button type="submit">Zarejestruj się</F.Button>

                <S.A href="/login">Masz już konto? Zaloguj się do Twittera</S.A>
            </F.Form>
            <S.P>{register} </S.P>
        </div>
    );
}

export default SignUp;