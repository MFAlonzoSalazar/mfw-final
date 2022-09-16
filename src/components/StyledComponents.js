import { Card, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const themes = {
    light: {
        bg: '#FFF',
        contrast: '#C38D94',
        border: '#B18188',
        hover: '#D6B1B6',
        headerText: '#2D2D34',
        text: '#2D2D34',
        cardBg: '#D2A9AF',
        cardText: '#2D2D34',
        shadow: '#785D64',
        shadowContrast:'#CDA0A7'

    },
    dark: {
        bg: '#25252B',
        contrast: '#B18188',
        border: '#9E757C',
        hover: '#D6B1B6',
        headerText: '#000',
        text: '#EAD6D9',
        cardBg: '#B18188',
        cardText: '#000',
        shadow: '#000',
        shadowContrast:'#CDA0A7'
    }
}

export const GlobalStyles= createGlobalStyle`
    body {
        ${({theme: {theme}})=> `
            background-color: ${themes[theme].bg};
            color:  ${themes[theme].text};
        `}
    }
`
export const StyledNavBar = styled(Navbar)`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    position:sticky;
    z-index: 100;
    top: 0;
    text-decoration: none;
    ${({theme: {theme}})=> `
        background-color : ${themes[theme].contrast};
        color: ${themes[theme].text};
        border: 2px solid ${themes[theme].border};
    `}
`
export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    ${({theme: {theme}})=> `
        color:  ${themes[theme].headerText};
        &:hover {
            color: ${themes[theme].hover};
        }
        &.active{
            font-weight: bold;
            text-decoration: none;
            color: ${themes[theme].active};  
        }
    `}
`

export const StyledIcon = styled.i`
    ${({theme: {theme}})=> `
        color:  ${themes[theme].headerText};
        &:hover {
            color: ${themes[theme].hover};
            font-weight: bolder;
            cursor: pointer;
        }
    `}
`
export const StyledA = styled.a`
    text-decoration: none;
    font-weight: normal;
    ${({theme: {theme}})=> `
        color:  ${themes[theme].headerText};
        &:hover {
            color: ${themes[theme].hover};
        }
    `}
`
export const StyledText = styled.p`
    ${({theme: {theme}})=> `
        color:  ${themes[theme].text};
    `}
`
export const PinkText = styled.p`
    ${({theme: {theme}})=> `
        color:  ${themes[theme].contrast};
    `}
`
export const StyledCard = styled(Card)`
    ${({theme: {theme}})=> `
        background-color: ${themes[theme].cardBg}; 
        color:  ${themes[theme].cardText};
        &:hover {
            transform: scale(1.1);
            box-shadow: 5px 8px 10px 1px ${themes[theme].shadow};
        }
    `}
`

export const AppBackground = styled.div`
    position: relative;
    min-height: 100vh;
`
export const StyledButton = styled.button`
    border-radius: 6px;
    width:100%;
    padding: 10px;
    margin-top: 20px;
    font-size: 14px;
    cursor: pointer;
    ${({theme: {theme}})=> `
        color: ${themes[theme].text};
        border: 1px solid ${themes[theme].border} !important;
        background: ${themes[theme].contrast} !important; 
        &:hover{
            box-shadow: inset 0 0 5px ${themes[theme].shadow} !important;
        }
        &:active {
            background: ${themes[theme].shadowContrast} !important;
            box-shadow: inset 0 0 5px ${themes[theme].shadow} !important;
        }
    `}
`
export const StyledProjectsButton = styled.button`
    border-radius: 6px;
    width:100%;
    padding: 10px;
    margin-top: 20px;
    font-size: 14px;
    cursor: pointer;
    ${({theme: {theme}})=> `
        color: ${themes[theme].text};
        border: 1px solid ${themes[theme].border} !important;
        background: ${themes[theme].bg} !important; 
        &:hover{
            box-shadow: inset 0 0 5px ${themes[theme].shadow} !important;
        }
        &:active {
            background: ${themes[theme].shadowContrast} !important;
            box-shadow: inset 0 0 5px ${themes[theme].shadow} !important;
        }
    `}
`