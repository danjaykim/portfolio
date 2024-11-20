import { Link } from 'react-router-dom'

export default function NavLinks({
    className,
    onLinkClick,
    isMobile,
    navBackground,
}) {
    const navLinks = [
        { title: 'ABOUT', href: '/about' },
        { title: 'PROJECTS', href: '/projects' },
        { title: 'CONTACT', href: '/' },
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
                                    ? 'font-inter text-2xl font-medium tracking-tightest blur-[.4px] text-[#1a3d5e] hover:text-slate-900 dark:text-neutral-300 dark:hover:text-neutral-100'
                                    : `font-medium blur-[.3px] tracking-tightest text-[.85rem] text-[#1a3d5e]
                                        py-2 px-4 rounded-lg dark:text-neutral-200
                                        ${navBackground ? 'dark:hover:bg-neutral-600/30 hover:bg-white/40' : 'hover:bg-white/20 dark:hover:bg-neutral-700/40'}`
                            }
                        >
                            {isMobile ? link.title.toUpperCase() : link.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
