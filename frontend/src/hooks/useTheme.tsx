import { ThemeContext } from "@/providers/ThemeProvider"
import { useContext } from "react"

const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error("error with useTheme ");
    }

    return context
}

export default useTheme