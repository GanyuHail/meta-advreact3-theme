import { useContext, createContext, useState } from "react";

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
    const [theme] = useState({
        light: "light",
        dark: "dark",
    });
    const toggleTheme = theme => !theme;
    return <ThemeContext.Provider value={( theme, toggleTheme )}></ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
