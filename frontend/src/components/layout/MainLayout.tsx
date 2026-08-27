import { Outlet } from "react-router"
import NavbarSection from "../Navbar"
import { AuthProvider } from "@/providers/AuthProvider"
import { ThemeProvider } from "@/providers/ThemeProvider"

const MainLayout = () => {
    return (
        <>
            <ThemeProvider>
                <AuthProvider>
                    <NavbarSection />
                    <Outlet />
                </AuthProvider>
            </ThemeProvider>
        </>
    )
}

export default MainLayout