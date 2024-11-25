import { useState } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import { Element, Link } from 'react-scroll'
import About from './About'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

export default function LandingPage() {
    const [isHovered, setIsHovered] = useState(false)
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
                        <h1 className="font-regular text-6xl tracking-[-.5px] md:text-[6rem] blur-[.5px]">
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
                    className="absolute bottom-0 mb-4 max-w-24 md:max-w-28 cursor-pointer"
                    offset={-55}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`absolute flex flex-col justify-center items-center gap-4 
                            size-[95px] md:size-[110px] dark:text-neutral-200
                            transition-all duration-500 ease-in-out
                            ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    >
                        <p className="text-xs font-semibold tracking-widest blur-[.3px]">
                            LEARN MORE
                        </p>
                        <i className="fa-solid fa-angle-down fa-xl"></i>
                    </div>

                    <img
                        src={
                            darkMode
                                ? '/dark_logo_transparent.png'
                                : '/logo_transparent.png'
                        }
                        alt="Learn More Logo"
                        className={`transition-all duration-500 ease-in-out ${isHovered ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
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
