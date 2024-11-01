import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'
import MenuButton from './MenuButton'
import NavLinks from './NavLinks'

export default function Nav() {
    const [open, setOpen] = useState(false)
    const [navBackground, setNavBackground] = useState(false)
    const { darkMode, toggleDarkMode } = useDarkMode()
    console.log(navBackground)

    useEffect(() => {
        if (open) document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden')
        // return () => document.body.classList.remove('overflow-hidden')
    }, [open])

    useEffect(() => {
        const handleScroll = () => setNavBackground(window.scrollY > 100)
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed z-50 w-full transition-colors duration-300 
            ${
                navBackground
                    ? 'py-2 bg-stone-200/90 dark:bg-neutral-800/90 transition-all ease-in'
                    : 'py-8 transition-all ease-out'
            }`}
        >
            <div className="container flex justify-between items-center relative">
                <Link
                    onClick={() => setOpen(false)}
                    to="/"
                    className="text-3xl font-sans font-bold tracking-tighter text-slate-700 
                hover:text-slate-800 z-50 md:text-4xl dark:text-neutral-300 dark:hover:text-neutral-100"
                >
                    Daniel Kim
                </Link>

                {/* Desktop Nav Menu */}
                <div className="hidden md:flex gap-2 items-center">
                    <NavLinks
                        navBackground={navBackground}
                        className="md:flex"
                    />
                    <button
                        onClick={toggleDarkMode}
                        className="font-bold bg-slate-700 h-10 w-10 rounded-full text-slate-100 text-sm dark:text-black dark:bg-neutral-200"
                    >
                        {darkMode ? 'lt' : 'dk'}
                    </button>
                </div>

                {/* Hamburger Menu - md:hidden */}
                <MenuButton open={open} setOpen={setOpen} />

                {/* Mobile Menu Open */}
                {open && (
                    <NavLinks
                        open={open}
                        isMobile={true}
                        onLinkClick={() => setOpen(false)}
                        className="fixed inset-0 bg-light-bg flex flex-col justify-center items-center gap-8 md:hidden dark:bg-dark-bg z-40"
                    />
                )}
            </div>
        </nav>
    )
}
