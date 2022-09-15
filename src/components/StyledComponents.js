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
        text: '#665158',
        cardBg: '#D2A9AF',
        shadow: '#785D64'

    },
    dark: {
        bg: '#25252B',
        contrast: '#B18188',
        border: '#9E757C',
        hover: '#D6B1B6',
        headerText: '#403940',
        text: '#EAD6D9',
        cardBg: '#B18188',
        shadow: '#000',
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
    font-weight: normal;
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
        width: 100%;
        height: 100%;
        color:  ${themes[theme].headerText};
        &:hover {
            color: ${themes[theme].hover};
            font-weight: bolder;
            cursor: pointer;
        }
    `}
`
export const ResumeLink = styled.a`
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
        color:  ${themes[theme].text};
        &:hover {
            transform: scale(1.1);
            box-shadow: 5px 8px 10px 1px ${themes[theme].shadow};
        }
    `}
`
export const CardText = styled(Card.Text)`
    ${({theme: {theme}})=> `
    color:  ${themes[theme].headerText};
    `}
`
export const CardTitle = styled(Card.Title)`
    ${({theme: {theme}})=> `
    color:  ${themes[theme].headerText};
    `}
`
export const AppBackground = styled.div`
    position: relative;
    min-height: 100vh;
`