import styled from 'styled-components';

export const F = {
    Form: styled.form`
    
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        `,

    Button: styled.button`

        background-color: #1da1f2;
        color: #fff;
        width: 250px;
        margin: 20px;
        border: 0;
        border-radius: 50px;
        padding: 10px ;
        outline: none;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer; 
        transition: 0.4s;

        &:hover{
            background-color: #1e80bd;
        }
        `,

    Input: styled.input`
    
        margin: 10px 0;
        padding: 5px 10px;
        outline: 0;
        border: 0;
        border-bottom: 2px solid #6e757c;
        font-size: 20px;
        background-color: #f5f8fa;
        transition: 0.4s;

        &:focus{
            border-bottom: 2px solid #1da1f2;
            color: #219deb;
        }
        `
}

export default F;