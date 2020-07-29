import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const S = {
    
    DivLeft: styled.div `
    
    width: 50%;
    float: left;
    background-color: #71c9f8;
    `,

    DivRight: styled.div `
    
    width: 50%;
    float: right;
    `,

    Svg: styled.svg `

    fill: #1da1f2;
    `,
    
    Nav: styled.nav`
    
    display: flex;
    align-items: center;
    justify-content: center;
    `,

    Ul: styled.ul `
    
    padding-inline-start: 0;
    `,
    
    Li: styled.li`

    list-style-type: none;
    display: inline-block;
    margin: 20px;
    `,

    Link: styled(Link)`

    text-decoration: none;
    text-transform: uppercase;
    color: #1da1f2;
    border: 2px solid #1da1f2;
    border-radius: 50px;
    padding: 5px 30px ;
    cursor: pointer;
    transition: 0.4s;

    &:hover{
      background-color: #1da1f2;
      color: #fff;
    }
    `,
    Footer: styled.footer`

    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    text-align: center;
    color: rgba(128, 128, 128, 0.918);
    `,

    A: styled.a `

    text-decoration: none;
    color: rgba(128, 128, 128, 0.918);
    padding: 10px ;
    `

  }
export default S;