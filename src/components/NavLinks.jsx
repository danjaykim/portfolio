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
                                    ? 'text-4xl font-bold text-slate-600 hover:text-slate-900 dark:text-neutral-300 dark:hover:text-neutral-100'
                                    : `font-sans font-semibold tracking-tight text-[1.1rem] text-slate-800 
                                        hover:text-slate-900 hover:bg-neutral-100 py-2 px-4 rounded-lg 
                                        dark:text-neutral-200 dark:hover:bg-neutral-800`
                            }
                        >
                            {link.title}
                        </Link>
                    </li>
                )
            })}

            {/* Mobile Menu - Dark Mode Button */}
            {open && (
                <button
                    onClick={toggleDarkMode}
                    className="mt-4 font-semibold bg-neutral-600 hover:bg-neutral-700 h-14 w-14 rounded-full 
                    text-lg text-white dark:text-neutral-800 dark:bg-neutral-300 dark:hover:bg-neutral-200"
                >
                    {darkMode ? 'lt' : 'dk'}
                </button>
            )}
        </ul>
    )
}
