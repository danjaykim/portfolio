import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'

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
                onClick={() => setOpen((prevState) => !prevState)}
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
            <ul className="hidden md:flex md:mt-3">
                {navLinks.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link
                                to={link.href}
                                className="
                                    font-sans 
                                    font-semibold 
                                    tracking-tight 
                                    text-[1.1rem] 
                                    text-slate-800 
                                    hover:text-slate-900
                                    hover:bg-zinc-100 
                                    py-2 px-4 
                                    rounded-lg"
                            >
                                {link.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            {/* Hamburger Menu - md:hidden */}
            <MenuButton open={open} setOpen={setOpen} />

            {/* Mobile Link Menu */}
            {open && (
                <ul
                    className="
                        fixed inset-0 
                        bg-white 
                        flex flex-col justify-center items-center gap-8 
                        md:hidden"
                >
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    onClick={() => setOpen(false)}
                                    to={link.href}
                                    className="text-4xl font-bold text-slate-600 hover:text-slate-900"
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
