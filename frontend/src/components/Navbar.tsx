import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Menu, Moon, Sun } from 'lucide-react';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import useTheme from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';



const Navbar = () => {

    const { user } = useAuth();

    const { theme, darkMode, setMode } = useTheme()



    const navItemsRight = [
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
            path: '/login',
        },
    ];

    const navItemsMiddle = [
        {
            title: 'Login',
            path: '/login',
            className: ""
        },
        {
            title: 'Signup',
            path: 'signup',
            className: `${theme}`
        },
    ];
    const renderMiddleNavBar = navItemsRight.map((item) => {
        if (!user) {
            return null
        }
        return (
            <Button key={item.title} asChild className="justify-start text-base" variant={'ghost'}>
                <Link to={item.path}>{item.title}</Link>
            </Button>
        )
    })
    const renderRightNavBar = navItemsMiddle.map((item) => {
        if (user) {
            return null
        }
        return (
            <Button asChild variant={'ghost'}>
                <Link className={item.className} to={item.path}>{item.title}</Link>
            </Button>
        )
    })
    return (
        <nav className={`mx-auto flex ${theme}    h-18 w-full  justify-between items-center gap-12 sm:px-4`}>
            <div>
                <Link to="/" className="[&_svg]:fill-primary [&_svg]:text-primary inline-flex h-9 flex-1 items-center gap-2 text-2xl/none font-bold tracking-tight [&_svg]:size-7">
                    Blookie
                </Link>
            </div>

            <div className="hidden flex-1 justify-end gap-3 lg:inline-flex">
                {darkMode === "light" ? <Sun className={`cursor-pointer `} onClick={() => setMode('dark')} /> : <Moon className='cursor-pointer' onClick={() => setMode('light')} />}
            </div>
            <div className="hidden gap-3 lg:inline-flex">
                {user ? renderMiddleNavBar : renderRightNavBar}

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