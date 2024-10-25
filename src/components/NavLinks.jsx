import { Link } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'

export default function NavLinks({ className, onLinkClick, isMobile, open }) {
    const { darkMode, toggleDarkMode } = useDarkMode()
    const navLinks = [
        { title: 'about', href: '/' },
        { title: 'projects', href: '/' },
        { title: 'contact', href: '/' },
    ]

    return (
        <ul className={className}>
            {navLinks.map((link, index) => {
                return (
                    <li key={index}>
                        <Link
                            onClick={onLinkClick}
                            to={link.href}
                            className={
                                isMobile
                                    ? 'text-4xl font-bold text-slate-600 hover:text-slate-900'
                                    : 'font-sans font-semibold tracking-tight text-[1.1rem] text-slate-800 hover:text-slate-900 hover:bg-zinc-100 py-2 px-4 rounded-lg'
                            }
                        >
                            {link.title}
                        </Link>
                    </li>
                )
            })}
            {open && (
                <button
                    onClick={toggleDarkMode}
                    className="mt-4 font-semibold bg-slate-600 hover:bg-slate-700 h-14 w-14 rounded-full text-white text-lg dark:text-black dark:border-2 dark:bg-white"
                >
                    {darkMode ? 'lt' : 'dk'}
                </button>
            )}
        </ul>
    )
}
