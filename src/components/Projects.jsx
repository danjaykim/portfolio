export default function Projects() {
    return (
        <section className="py-12 md:py-20 bg-[#DCE3EB]/60 dark:bg-neutral-900/70">
            <h3 className="font-inter font-medium text-base text-center text-[#1a3d5e] mb-10 dark:text-neutral-200 tracking-widest blur-[.5px] underline underline-offset-8 decoration-1 md:mb-20">
                PROJECTS
            </h3>
            <div className="container flex flex-col gap-14 md:gap-24 text-[#1a3d5e]">
                <div className="project-container flex flex-col gap-6 md:flex-row md:justify-between md:gap-20">
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-2 mb-3">
                            <a
                                href="https://github.com/Sigma-Unity-CRM/CRM-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="font-inter text-[1rem] dark:text-stone-200 underline underline-offset-8 decoration-1">
                                    xCRM
                                </p>
                            </a>
                            <a
                                href="https://github.com/Sigma-Unity-CRM/CRM-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="devicon-github-original text-2xl dark:text-neutral-200"></i>
                            </a>
                        </div>
                        <div className="font-open text-[.95rem] dark:text-stone-300 font-light tracking-wide leading-relaxed">
                            <p className="mb-4">
                                X CRM is a solution designed to make customer
                                relationship management accessible and efficient
                                for small and medium-sized businesses. Our focus
                                is on creating a user-friendly platform that
                                integrates seamlessly with popular social
                                channels, making it easier for businesses to
                                manage customer interactions across multiple
                                platforms.
                            </p>
                            <p>
                                X CRM is currently under active development.
                                We're excited about the potential impact this
                                tool will have on making CRM more accessible and
                                effective for SMBs. Stay tuned for updates!
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <a
                            href="https://github.com/Sigma-Unity-CRM/CRM-Project"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/CRM_Schema.png"
                                alt="SigmaCRM project schema"
                                className="aspect-[16/9] rounded"
                            />
                        </a>
                    </div>
                </div>
                <span className="w-full h-1 border-t border-[#1a3d5e] dark:border-neutral-200 blur-[.7px] md:hidden"></span>
                <div className="project-container flex flex-col gap-6 md:flex-row md:justify-between md:gap-20">
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-2 mb-3">
                            <a
                                href="https://github.com/kim-vuong/MovieKnight/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="font-inter text-[1rem] dark:text-stone-200 underline underline-offset-8 decoration-1">
                                    MovieKnight
                                </p>
                            </a>
                            <a
                                href="https://github.com/kim-vuong/MovieKnight/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="devicon-github-original text-2xl dark:text-neutral-200"></i>
                            </a>
                        </div>
                        <p className="font-open text-[.95rem] dark:text-stone-300 font-light tracking-wide leading-relaxed">
                            MovieKnight is an application for movie enthusiasts
                            who want to take their film experience to the next
                            level. Whether you're tracking movies watched,
                            curating personalized watchlists, or sharing
                            reviews, MovieKnight keeps everything organized in
                            one easy-to-use platform. With the integration of
                            our third-party app, users can search and add any
                            movie (new or old) to our extensive movie library,
                            ensuring the MovieKnight community stays up to date
                            with the latest releases while also rediscovering
                            timeless classics.
                        </p>
                    </div>
                    <iframe
                        className="aspect-video w-full md:w-1/2 rounded"
                        src="https://www.youtube.com/embed/t5VN46aoliU?si=ObbUU9Mfj8D9vpiC"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <span className="w-full h-1 border-t border-[#1a3d5e] dark:border-neutral-200 blur-[.7px] md:hidden"></span>
                <div className="project-container flex flex-col gap-6 md:flex-row md:justify-between md:gap-20">
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-2 mb-3">
                            <a
                                href="https://github.com/danieljaykim/nexgenauto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="font-inter text-[1rem] dark:text-stone-200 underline underline-offset-8 decoration-1">
                                    NexGenAuto
                                </p>
                            </a>
                            <a
                                href="https://github.com/danjaykim/nexgenauto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="devicon-github-original text-2xl dark:text-neutral-200"></i>
                            </a>
                        </div>
                        <p className="font-open text-[.95rem] dark:text-stone-300 font-light tracking-wide leading-relaxed">
                            NexGenAuto is developed for managing inventory,
                            sales, and servicing systems in car dealerships.
                            Tailored to the unique needs of automotive
                            businesses, this application enables dealerships to
                            perform day-to-day operations with efficiency and
                            ease. Our platform provides a wide range of
                            functionality from tracking vehicle inventory and
                            managing sales transactions to coordinating service
                            schedules and customer interactions.
                        </p>
                    </div>
                    <iframe
                        className="aspect-video w-full md:w-1/2 rounded"
                        src="https://www.youtube.com/embed/y9dICJGHWlE?si=w0EnG2pz29BWZTLS"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    )
}
