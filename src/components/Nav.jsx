import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'

const navLinks = [
    { title: 'About', href: '/' },
    { title: 'Projects', href: '/' },
    { title: 'Contact', href: '/' },
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
                onClick={() => setOpen((prevState) => !prevState)}
                to="/"
                className="text-3xl font-sans font-bold tracking-tighter text-slate-700 z-10 sm:text-3xl md:text-4xl"
            >
                Daniel Kim
            </Link>

            {/* Desktop Links */}
            <ul className="hidden md:flex">
                {navLinks.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link to={link.href}>{link.title}</Link>
                        </li>
                    )
                })}
            </ul>

            {/* Hamburger Menu - md:hidden */}
            <MenuButton open={open} setOpen={setOpen} />

            {/* Mobile Link Menu */}
            {open && (
                <ul className="fixed inset-0 bg-white flex flex-col justify-center overscroll-none items-center gap-4 md:hidden">
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    onClick={() => setOpen(false)}
                                    to={link.href}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )}
        </nav>
    )
}
