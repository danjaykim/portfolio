import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { debounce } from 'lodash'
import MenuButton from './MenuButton'
import NavLinks from './NavLinks'
import DarkModeButton from './DarkModeButton'

export default function Nav({ open, setOpen }) {
    const [navBackground, setNavBackground] = useState(false)

    useEffect(() => {
        // const handleScroll = debounce(() => setNavBackground(scrollY > 100), 50)
        const handleScroll = () => setNavBackground(scrollY > 100)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed z-50 w-full transition-all duration-300
            ${
                navBackground
                    ? 'py-1 md:py-3 bg-stone-200/90 dark:bg-neutral-800/90 ease-in'
                    : 'py-8 ease-out'
            }`}
        >
            <div className="container flex justify-between items-center">
                {/* <Link
                    onClick={() => setOpen(false)}
                    to="/"
                    className="text-3xl font-sans font-bold tracking-tighter text-slate-700 
                hover:text-slate-800 z-50 md:text-4xl dark:text-neutral-300 dark:hover:text-neutral-100"
                >
                    Daniel Kim
                </Link> */}
                <DarkModeButton />

                {/* Desktop Nav Menu */}
                <div className="hidden md:flex gap-2 items-center">
                    <NavLinks
                        navBackground={navBackground}
                        className="md:flex"
                    />
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
