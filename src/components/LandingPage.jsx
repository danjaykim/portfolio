import About from './About'

export default function LandingPage() {
    return (
        <>
            <main className="container flex flex-col justify-center items-center min-h-screen">
                <div className="main-content mt-20 flex flex-col items-center gap-12">
                    <img
                        src="/profile-mono.jpg"
                        alt="profile-pic"
                        className="w-56 md:w-60 rounded-full border-2"
                    />
                    <p className="font-mengka text-6xl md:text-9xl text-neutral-700 dark:text-neutral-200 text-center">
                        Creative Logic
                    </p>
                </div>
            </main>
            <About />
        </>
    )
}
