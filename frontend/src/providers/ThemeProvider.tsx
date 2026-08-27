import { getTheme, setTheme } from "@/storage/getTheme";
import type { Mode } from "@/types/theme";
import {
    createContext,
    useState,
    type ReactNode,
} from "react";

interface IProps {
    children: ReactNode;
}



type IContext = {
    darkMode: Mode;
    theme: "bg-[#f3f4f6] text-black" | 'bg-[#070707] text-white ';
    setMode: (mode: Mode) => void;
};

export const ThemeContext = createContext<IContext | undefined>(undefined);

export const ThemeProvider = ({ children }: IProps) => {
    const [darkMode, setDarkMode] = useState<Mode>(() => {
        return getTheme()
    });

    const setMode = (mode: Mode) => {
        setDarkMode(mode);
        setTheme(mode)
    }
    const theme = darkMode === "light" ? "bg-[#f3f4f6] text-black" : "bg-[#070707] text-white "
    return (
        <ThemeContext value={{ darkMode, setMode, theme }}>
            {children}
        </ThemeContext>
    );
};