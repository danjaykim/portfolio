import { Link } from 'react-scroll'

export default function NavLinks({
    className,
    onLinkClick,
    isMobile,
    navBackground,
}) {
    const navLinks = [
        { title: 'ABOUT', href: 'about' },
        { title: 'PROJECTS', href: 'projects' },
        { title: 'CONTACT', href: 'contact' },
    ]

    return (
        <ul className={className}>
            {navLinks.map((link, index) => {
                return (
                    <li key={index}>
                        <Link
                            onClick={onLinkClick}
                            to={link.href}
                            smooth={true}
                            duration={500}
                            offset={isMobile ? -64 : -55}
                            className={
                                isMobile
                                    ? 'font-kiona text-2xl font-bold tracking-widest text-[#1a3d5e] hover:text-slate-900 dark:text-neutral-300 dark:hover:text-neutral-100 cursor-pointer'
                                    : `font-kiona font-bold text-[.9rem] text-[#1a3d5e]
                                        py-2 px-4 rounded-lg dark:text-neutral-200 cursor-pointer
                                        ${navBackground ? 'dark:hover:bg-neutral-600/30 hover:bg-neutral-200/50' : 'hover:bg-white/20 dark:hover:bg-neutral-700/40'}`
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
