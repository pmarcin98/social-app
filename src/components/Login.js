import React, { useState } from 'react';
import F from '../styles/F.Form';
import S from '../styles/S.Login';
import axios from 'axios';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [Error, setError] = useState('');
    var token = '';

    const handleSubmit = (e) => {

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        axios.post(
            'https://akademia108.pl/api/social-app/user/login',
            JSON.stringify(userLogin),
            { 'headers': headers })
            .then((req) => {

                if (req.data.error === true) {
                    setError('Błędne logowanie!');
                    console.log(req.data);
                    
                }   else if (req.data.error === false) {
                    console.log(req.data);
                    setError('Poprawne logowanie!');
                    token = req.data.jwt_token;
                }

            }).catch((error) => {
                console.log(error);
            })

        e.preventDefault();
    }

    let userLogin = {
        username: userName,
        password: userPassword,
        ttl: 3600
    
    }

    const changeInput = (e) => {
            const { name, value } = e.target;
            if (name === "userName") {
                
                setUserName(value);
            } 
            if (name === "userPassword") {

                setUserPassword(value);
            } 
    }
   
    return(
        <div>
        <F.Form onSubmit={handleSubmit}>

            <h2>Zaloguj się do Twittera:</h2>

            <F.Input type="text" placeholder="Nazwa użytkownika" value={userName} name="userName" onChange={changeInput} required />
            <F.Input type="password" placeholder="Hasło" value={userPassword} name="userPassword" onChange={changeInput} required />
            <F.Button type="submit">Zaloguj się</F.Button>

            <div>{Error}</div>
            <S.A href="/signup">Zarejestruj się, aby korzytać z Twittera</S.A>
        </F.Form>
        </div >
    ); 
}

export default Login;