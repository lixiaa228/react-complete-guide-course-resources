import { useContext, useState } from 'react'
import { ThemeContext } from "../store/theme-context.jsx";

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <header>
            <h1>Demo Website</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
}
