export default function About() {
    return (
        <section className="bg-neutral-200/60 dark:bg-neutral-800/80 py-12">
            <h2
                className="hidden md:block font-inter
                text-neutral-700 text-3xl md:text-4xl text-center tracking-tight dark:text-neutral-200 mb-14"
            >
                about me
            </h2>
            <div className="container relative flex flex-col md:flex-row md:justify-between md:gap-14">
                <div className="about-content mb-12 md:mb-0 md:w-[50%]">
                    <h2 className="md:hidden font-sans font-semibold text-neutral-700 text-3xl text-center tracking-tight dark:text-neutral-200 mb-8">
                        about me
                    </h2>
                    <h2 className="hidden md:block font-sans text-neutral-700 text-lg text-center tracking-tight dark:text-neutral-200 mb-8">
                        background
                    </h2>
                    <div className="font-open dark:text-stone-300 font-light tracking-wide leading-relaxed">
                        <p className="mb-5">Filler</p>
                        <p className="mb-5">Filler</p>
                        <p>Filler</p>
                    </div>
                </div>
                <div className="hidden md:block border-r border-neutral-400 dark:border-neutral-400 h-full left-1/2 top-1/2 -translate-y-1/2 absolute"></div>
                <div className="skills-content md:w-[50%]">
                    <h2 className="md:hidden font-sans font-semibold text-3xl text-center tracking-tight dark:text-neutral-200 mb-8">
                        skills
                    </h2>
                    <h2 className="hidden md:block font-sans text-neutral-700 text-lg text-center tracking-tight dark:text-neutral-200 mb-8">
                        technical skills
                    </h2>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-8 font-open text-6xl text-neutral-600 dark:text-neutral-200 text-center">
                        <div className="icon-container py-3 bg-neutral-300/30 dark:bg-transparent rounded shadow-md">
                            <i className="devicon-javascript-plain hover:text-[#fcba03]"></i>
                            <p className="text-[.8rem] pt-1">JavaScript</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-python-plain hover:text-[#FFD23C]"></i>
                            <p className="text-[.8rem] pt-1">Python</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-html5-plain hover:text-[#E14422]"></i>
                            <p className="text-[.8rem] pt-1">HTML5</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-css3-plain hover:text-[#1567AD]"></i>
                            <p className="text-[.8rem] pt-1">CSS3</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-react-plain hover:text-[#56D5FA]"></i>
                            <p className="text-[.8rem] pt-1">React</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-fastapi-plain hover:text-[#058D7F]"></i>
                            <p className="text-[.8rem] pt-1">FastAPI</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-django-plain hover:text-[#0D291D]"></i>
                            <p className="text-[.8rem] pt-1">Django</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-postgresql-plain hover:text-[#2D5C86]"></i>
                            <p className="text-[.8rem] pt-1">PostreSQL</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-mongodb-plain hover:text-[#46A039]"></i>
                            <p className="text-[.8rem] pt-1">MongoDB</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-tailwindcss-plain hover:text-[#31B5F7]"></i>
                            <p className="text-[.8rem] pt-1">Tailwind</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-bootstrap-plain hover:text-[#6627F8]"></i>
                            <p className="text-[.8rem] pt-1">Bootstrap</p>
                        </div>
                        <div className="icon-container py-3">
                            <i className="devicon-docker-plain hover:text-[#0490BF]"></i>
                            <p className="text-[.8rem] pt-1">Docker</p>
                        </div>
                        <div className="icon-container py-3 col-span-1 col-start-2 row-start-5 md:col-start-3 md:row-start-3">
                            <i className="devicon-git-plain hover:text-[#F14625]"></i>
                            <p className="text-[.8rem] pt-1">Git</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
