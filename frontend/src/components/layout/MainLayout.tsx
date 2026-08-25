import { Outlet } from "react-router"
import NavbarSection from "../Navbar"

const MainLayout = () => {
    return (
        <>
            <NavbarSection />
            <Outlet />
        </>
    )
}

export default MainLayout