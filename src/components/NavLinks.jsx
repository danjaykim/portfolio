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
                                    ? 'text-2xl blur-[.3px] text-[#2D3C18] hover:text-slate-900 dark:text-neutral-300 dark:hover:text-neutral-100'
                                    : `font-semibold blur-[.3px] tracking-tight text-[.98rem] text-[#2D3C18]
                                        hover:bg-white/20 py-2 px-4 rounded-lg dark:text-neutral-200
                                        ${navBackground ? 'dark:hover:bg-neutral-600/20' : 'dark:hover:bg-neutral-800/40'}`
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
