import Header from './Header.jsx';
import {useContext} from "react";
import {ThemeContext} from "../store/theme-context.jsx";

export default function Page() {
   const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div id="app" className={theme}>
            <Header />

            <article>
                <h2>React Course</h2>
                <p>
                    A course that teaches you React from the ground up and in great depth!
                </p>
            </article>
        </div>
    );
}
