export default function LandingPage() {
    return (
        <main className="container flex flex-col justify-center items-center min-h-screen">
            <div className="main-title relative">
                <p
                    className="font-dm text-6xl tracking-tight font-bold 
                    text-slate-700 dark:text-neutral-200 md:text-[3.5rem]"
                >
                    creative
                </p>
                <p
                    className="font-invasion text-[3.1rem] mt-1.5 text-slate-800 dark:text-neutral-300 
                tracking-wide absolute left-12 top-7 md:text-[3rem] md:left-5 md:top-8 md:mt-0"
                >
                    Logic
                </p>
            </div>
            <div className="main-content mt-20 flex flex-col items-center gap-12">
                <img
                    src="/profile-mono.jpg"
                    alt="profile-pic"
                    className="w-56 md:w-60 rounded-full border-2"
                />
                <p className="font-inter dark:text-neutral-200 text-center max-w-[800px]">
                    Turning Ideas Into Reality.
                </p>
            </div>
        </main>
    )
}
