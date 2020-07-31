import styled from 'styled-components';

export const S = {
    
    Div: styled.div `

        color: red;
        `,

    A: styled.a `

        text-decoration: none;
        color: #1da1f2;
        padding: 10px ;
        
        &:hover{
            text-decoration: underline;
        }
        `,

    P: styled.p `

        text-transform: uppercase;
        color: green;
        padding: 10px ;
        width: 100%;
        text-align: center;
        `
}

export default S;