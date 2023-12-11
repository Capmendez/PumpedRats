import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import img from '../assets/logo.svg'

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
font-size: ${props => props.theme.fontmd};

}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
        STAY PUMPED.
        </Link>
    </LogoText>
  )
}

export default Logo