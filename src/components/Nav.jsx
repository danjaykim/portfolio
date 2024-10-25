import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'
import MenuButton from './MenuButton'
import NavLinks from './NavLinks'

export default function Nav() {
    const [open, setOpen] = useState(false)
    const { darkMode, toggleDarkMode } = useDarkMode()

    useEffect(() => {
        if (open) document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden')
        // return () => document.body.classList.remove('overflow-hidden')
    }, [open])

    return (
        <nav className="container flex justify-between items-center relative">
            <Link
                onClick={() => setOpen(false)}
                to="/"
                className="text-3xl font-sans font-bold tracking-tighter text-slate-700 hover:text-slate-800 z-10 md:text-4xl"
            >
                Daniel Kim
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-2 items-center">
                <NavLinks className="md:flex" />
                <button
                    onClick={toggleDarkMode}
                    className="font-semibold bg-slate-700 h-10 w-10 rounded-full text-white text-sm dark:text-black dark:border-2 dark:bg-white"
                >
                    {darkMode ? 'lt' : 'dk'}
                </button>
            </div>

            {/* Hamburger Menu - md:hidden */}
            <MenuButton open={open} setOpen={setOpen} />

            {/* Mobile Link Menu */}
            {open && (
                <NavLinks
                    open={open}
                    isMobile={true}
                    onLinkClick={() => setOpen(false)}
                    className="fixed inset-0 bg-white flex flex-col justify-center items-center gap-8 md:hidden"
                />
            )}
        </nav>
    )
}
