import About from './About'
import Projects from './Projects.jsx'

export default function LandingPage() {
    return (
        <>
            <main className="container relative flex flex-col justify-center items-center min-h-screen">
                <div className="main-content flex flex-col gap-5 items-center justify-center">
                    <img
                        src="/profile.jpg"
                        alt="profile-pic"
                        className="w-56 md:w-60 rounded-full border border-neutral-300 dark:border-none"
                    />
                    <div>
                        <h1 className="font-regular text-6xl tracking-[-.01rem] md:text-[7rem] text-[#2D3C18] dark:text-neutral-200 text-center blur-[.5px]">
                            Daniel Kim
                        </h1>
                        <p className="font-sans font-extralight text-sm md:text-lg mt-4 text-[#3C5022] dark:text-neutral-200 text-center blur-[.4px]">
                            SOFTWARE ENGINEER
                        </p>
                    </div>
                </div>
            </main>
            <About />
            <Projects />
        </>
    )
}
