import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
    {
        title: 'Tasks',
        path: '/tasks',
    },
    {
        title: 'Profile',
        path: '/profile',
    },
];

export default function NavbarSection() {

    const renderNavBar = navItems.map((item) => (
        <Button key={item.title} asChild className="justify-start text-base" variant={'ghost'}>
            <Link to={item.path}>{item.title}</Link>
        </Button>
    ))
    return (
        <nav className="mx-auto flex h-18 w-full max-w-7xl items-center gap-12 px-6 sm:px-4">
            <Link to="/" className="[&_svg]:fill-primary [&_svg]:text-primary inline-flex h-9 flex-1 items-center gap-2 text-2xl/none font-bold tracking-tight [&_svg]:size-7">

                Blookie
            </Link>

            <div className="hidden gap-3 lg:inline-flex">
                {navItems.map((item) => (
                    <Button key={item.title} asChild variant={'ghost'}>
                        <Link to={item.path}>{item.title}</Link>
                    </Button>
                ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden flex-1 justify-end gap-3 lg:inline-flex">
                <Button asChild variant={'ghost'}>
                    <Link to="/login">Log in</Link>
                </Button>
                <Button asChild>
                    <Link to="/signup">Sign up</Link>
                </Button>
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
                    <nav className="-mx-4 my-6 flex flex-1 flex-col gap-2">
                        {renderNavBar}
                    </nav>
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