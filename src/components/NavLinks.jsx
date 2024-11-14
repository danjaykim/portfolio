import { Link } from 'react-router-dom'

export default function NavLinks({
    className,
    onLinkClick,
    isMobile,
    navBackground,
}) {
    const navLinks = [
        { title: 'about', href: '/about' },
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
                                        hover:text-slate-900 hover:bg-white/30 py-2 px-4 rounded-lg dark:text-neutral-200
                                        ${navBackground ? 'dark:hover:bg-neutral-600/20' : 'dark:hover:bg-neutral-800/70'}`
                            }
                        >
                            {link.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
