import Page from './components/Page.jsx'
import { ThemeContext } from './store/theme-context.jsx'
import {useState} from 'react'

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Page />
        </ThemeContext.Provider>
        )


}

export default App;
