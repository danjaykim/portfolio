import { Link } from 'react-router-dom'

export default function NavLinks({ className, onLinkClick, isMobile }) {
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
        </ul>
    )
}
