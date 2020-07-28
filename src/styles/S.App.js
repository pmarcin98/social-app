import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const S = {
    Nav: styled.nav`
    
    display:flex;
    align-items: center;
    justify-content: center;
    `,
    
    Li: styled.li`

    list-style-type: none;
    display:inline-block;
    `,

    Link: styled(Link)`

    text-decoration: none;
    text-transform: uppercase;
    margin: 8px;
    `
  }
export default S;