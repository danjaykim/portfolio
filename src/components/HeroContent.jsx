import { useState } from 'react'
import { Link } from 'react-scroll'

export default function HeroContent({ darkMode }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <main className="container relative flex flex-col justify-center items-center min-h-screen">
            <div className="main-content flex flex-col gap-5 items-center justify-center">
                <img
                    src="/profile.jpg"
                    alt="profile-pic"
                    className="w-56 md:w-60 rounded-full"
                />
                <div className="text-[#1a3d5e] dark:text-neutral-200 text-center">
                    <h1 className="font-kiona text-5xl md:text-[6rem]">
                        DANIEL KIM
                    </h1>
                    <p className="font-sans font-extralight text-sm md:text-lg mt-4">
                        SOFTWARE ENGINEER
                    </p>
                </div>
                {/* <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="max-w-24 md:max-w-28 cursor-pointer"
                    offset={-55}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`absolute flex flex-col justify-center items-center gap-4 
                            text-[#1a3d5e] size-[95px] md:size-[110px] dark:text-neutral-200
                            transition-all duration-500 ease-in-out
                            ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    >
                        <p className="text-xs font-semibold tracking-widest">
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
                </Link> */}
            </div>
            <Link
                to="about"
                smooth={true}
                duration={500}
                className="absolute bottom-0 max-w-24 md:max-w-28 cursor-pointer"
                offset={-55}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`absolute flex flex-col justify-center items-center gap-4 
                            text-[#1a3d5e] size-[95px] md:size-[110px] dark:text-neutral-200
                            transition-all duration-500 ease-in-out
                            ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                    <p className="text-xs font-semibold tracking-widest">
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
    )
}
