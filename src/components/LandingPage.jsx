import { useDarkMode } from '../hooks/useDarkMode'
import { Element, Link } from 'react-scroll'
import About from './About'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

export default function LandingPage() {
    const { darkMode } = useDarkMode()

    return (
        <>
            <main className="container relative flex flex-col justify-center items-center min-h-screen">
                <div className="main-content flex flex-col gap-5 items-center justify-center">
                    <img
                        src="/profile.jpg"
                        alt="profile-pic"
                        className="w-56 md:w-60 rounded-full border border-neutral-300 dark:border-none"
                    />
                    <div className="text-[#1a3d5e] dark:text-neutral-200 text-center">
                        <h1 className="font-regular text-6xl tracking-[-.01rem] md:text-[6rem] blur-[.5px]">
                            Daniel Kim
                        </h1>
                        <p className="font-sans font-extralight text-sm md:text-lg mt-4 blur-[.4px]">
                            SOFTWARE ENGINEER
                        </p>
                    </div>
                </div>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="absolute bottom-0 mb-4 max-w-20 md:max-w-28"
                    offset={-55}
                >
                    <img
                        src={
                            darkMode
                                ? '/dark_logo_transparent.png'
                                : '/logo_transparent.png'
                        }
                        alt="Logo"
                    />
                </Link>
            </main>
            <Element name="about">
                <About />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </>
    )
}
