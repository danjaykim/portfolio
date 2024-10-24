import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'
import NavLinks from './NavLinks'

const navLinks = [
    { title: 'about', href: '/' },
    { title: 'projects', href: '/' },
    { title: 'contact', href: '/' },
]

export default function Nav() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden')
        // return () => document.body.classList.remove('overflow-hidden')
    }, [open])

    return (
        <nav className="container flex justify-between items-center md:mt-4 relative">
            <Link
                onClick={() => setOpen(false)}
                to="/"
                className="
                    text-3xl 
                    font-sans font-bold 
                    tracking-tighter 
                    text-slate-700 hover:text-slate-800 
                    z-10 
                    md:text-4xl"
            >
                Daniel Kim
            </Link>

            {/* Desktop Links */}
            <NavLinks className="hidden md:flex md:mt-3" />

            {/* Hamburger Menu - md:hidden */}
            <MenuButton open={open} setOpen={setOpen} />

            {/* Mobile Link Menu */}
            {open && (
                <NavLinks
                    isMobile={true}
                    onLinkClick={() => setOpen(false)}
                    className="fixed inset-0 bg-white flex flex-col justify-center items-center gap-8 md:hidden"
                />
            )}
        </nav>
    )
}
