import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { StyledIcon } from "../StyledComponents";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <div onClick={toggleTheme}>
            <StyledIcon className={theme === 'light' ? 'bi bi-sun-fill fs-4' : 'bi bi-moon-stars-fill fs-4'} />
        </div> 
    )
}
