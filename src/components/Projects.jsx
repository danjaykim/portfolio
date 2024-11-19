export default function Projects() {
    return (
        <section className="py-12 md:py-20 bg-neutral-200/60 dark:bg-neutral-900/80">
            <h3 className="text-3xl md:text-4xl font-semibold text-center mb-14 md:mb-20 dark:text-neutral-200">
                projects
            </h3>
            <div className="container flex flex-col gap-14 md:gap-24">
                <div className="project-container flex flex-col gap-6 md:flex-row md:justify-between md:gap-20">
                    <div className="md:w-1/2">
                        <p className="font-open text-2xl dark:text-stone-200 mb-4">
                            MovieKnight
                        </p>
                        <p className="font-open dark:text-stone-300 font-light tracking-wide leading-relaxed">
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
                <div className="project-container flex flex-col gap-6 md:flex-row md:justify-between md:gap-20">
                    <div className="md:w-1/2">
                        <p className="font-open text-2xl dark:text-stone-200 mb-4">
                            NexGenAuto
                        </p>
                        <p className="font-open dark:text-stone-300 font-light tracking-wide leading-relaxed">
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
