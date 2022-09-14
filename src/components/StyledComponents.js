import { Navbar } from "react-bootstrap"
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
        text: '#665158'

    },
    dark: {
        bg: '#25252B',
        contrast: '#B18188',
        border: '#9E757C',
        hover: '#D6B1B6',
        headerText: '#403940',
        text:'#EAD6D9'
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