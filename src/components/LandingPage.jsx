import About from './About'

export default function LandingPage() {
    return (
        <>
            <main className="container relative flex flex-col justify-center items-center min-h-screen">
                {/* <div className="absolute left-0 top-[20%] flex items-center gap-2">
                    <span className="w-[.3rem] h-8 bg-[#1A1818] dark:bg-neutral-200"></span>
                    <p className="font-open text-md text-[#1A1818] dark:text-neutral-200 tracking-widest">
                        introducing
                    </p>
                </div> */}
                <div className="main-content flex flex-col gap-5 items-center justify-center">
                    <img
                        src="/profile.jpg"
                        alt="profile-pic"
                        className="w-56 md:w-60 rounded-full border border-neutral-300 dark:border-none"
                    />
                    <div>
                        <p className="font-regular text-6xl tracking-tight md:text-[7rem] text-[#000435] dark:text-neutral-200 text-center">
                            Daniel Kim
                        </p>
                        <p className="font-sans font-extralight text-sm md:text-lg mt-4 text-[#1A1818] dark:text-neutral-200 text-center">
                            SOFTWARE ENGINEER
                        </p>
                    </div>
                </div>
            </main>
            <About />
            <p className="dark:text-neutral-300 mb-10 bg-neutral-200/60 dark:bg-neutral-800/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in?
            </p>
            <p className="dark:text-neutral-300 mb-10 bg-neutral-200/60 dark:bg-neutral-800/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in?
            </p>
            <p className="dark:text-neutral-300 mb-10 bg-neutral-200/60 dark:bg-neutral-800/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in?
            </p>
            <p className="dark:text-neutral-300 bg-neutral-200/60 dark:bg-neutral-800/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa nemo maiores ut beatae impedit quidem
                deleniti unde. Harum consectetur sit hic placeat voluptatibus,
                iusto eum eius fuga nemo. Voluptatibus, in? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa nemo maiores ut
                beatae impedit quidem deleniti unde. Harum consectetur sit hic
                placeat voluptatibus, iusto eum eius fuga nemo. Voluptatibus,
                in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa nemo maiores ut beatae impedit quidem deleniti unde. Harum
                consectetur sit hic placeat voluptatibus, iusto eum eius fuga
                nemo. Voluptatibus, in?
            </p>
        </>
    )
}
