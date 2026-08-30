import { Link, NavLink, } from 'react-router';
import { Button } from '@/components/ui/button';
import { Menu, Moon, Sun } from 'lucide-react';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import useTheme from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import useLogout from '@/hooks/useLogout';



const Navbar = () => {
    const { isAuthenticated } = useAuth();
    const { mutate, isPending } = useLogout()
    const { theme, darkMode, setMode } = useTheme()




    const navItemsMiddle = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'Profile',
            path: '/profile',
        },
        {
            title: 'My Tasks',
            path: '/task',
        },
        {
            title: 'Logout',
            path: ''
        },
    ];

    const navItemsRight = [
        {
            title: 'Login',
            path: '/login',
            className: ""
        },
        {
            title: 'Signup',
            path: '/signup',
            className: `${theme}`
        },
    ];
    const renderMiddleNavBar = navItemsMiddle.map((item) => {
        if (!isAuthenticated) {
            return null
        }

        if (item.title === "Logout") {
            return (

                <NavLink className={`px-4 py-2 rounded-md text-base`} to={item.path} onClick={() => {

                    mutate()
                }} key={item.title} >
                    {item.title}
                </NavLink>
            )
        }

        return (
            <NavLink className={({ isActive }) => `px-4 py-2 rounded-md text-base transition-colors ${isActive ? 'bg-indigo-600 text-white font-bold' : 'bg-black  text-white  hover:border-indigo-500'}`} to={item.path}>{item.title}</NavLink>
        )
    })
    const renderRightNavBar = navItemsRight.map((item) => {
        if (isAuthenticated) {
            return null
        }
        return (
            <NavLink className={({ isActive }) => { `${item.className} ${isActive ? 'bg-indigo-600 text-white font-bold' : 'bg-black  text-white  hover:border-indigo-500'}` }} to={item.path}>{item.title}</NavLink>
        )
    })


    return (
        <nav className={`mx-auto flex ${theme}    h-18 w-full  justify-between items-center gap-12 sm:px-4`}>
            <div>
                <Link to={isAuthenticated ? "/" : "/login"} className="[&_svg]:fill-primary [&_svg]:text-primary inline-flex h-9 flex-1 items-center gap-2 text-2xl/none font-bold tracking-tight [&_svg]:size-7">
                    Blookie
                </Link>
            </div>
            <div className="hidden flex-1 justify-end gap-3 lg:inline-flex">
                {darkMode === "light" ? <Sun className={`cursor-pointer `} onClick={() => setMode('dark')} /> : <Moon className='cursor-pointer' onClick={() => setMode('light')} />}
            </div>
            <div className="hidden gap-3 lg:inline-flex">
                {isAuthenticated ? renderMiddleNavBar : renderRightNavBar}

            </div>




            <Sheet>
                <SheetTrigger asChild className="ml-auto lg:hidden">
                    <Button variant="outline" size="icon" aria-label="Open Menu">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="flex w-[90%] max-w-sm flex-col px-6 py-6">
                    <SheetTitle>

                        <Link to="/" className="[&_svg]:fill-primary [&_svg]:text-primary inline-flex h-9 items-center gap-2 text-2xl/none font-bold tracking-tight [&_svg]:size-7">
                            Blookie
                        </Link>
                    </SheetTitle>

                    <div className="mt-auto grid gap-3">
                        <Button variant={'outline'} asChild>
                            <Link to="/login">Log in</Link>
                        </Button>
                        <Button asChild>
                            <Link to="/signup">Get Started</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

export default Navbar