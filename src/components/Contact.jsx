export default function Contact() {
    return (
        <section className="bg-neutral-300/50 dark:bg-[#1C2625]/60 py-12 md:py-20">
            <h4 className="font-inter font-medium text-base text-center text-[#1a3d5e] mb-10 dark:text-neutral-200 tracking-widest blur-[.5px] underline underline-offset-8 decoration-1 md:mb-20">
                CONTACT
            </h4>
            <div className="container flex justify-center gap-8 text-4xl">
                <a
                    href="https://www.linkedin.com/in/danjaykim"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="devicon-linkedin-plain colored"></i>
                </a>
                <a
                    href="https://github.com/danjaykim"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="devicon-github-original colored dark:text-neutral-200"></i>
                </a>
                <a
                    href="https://gitlab.com/danjkim831"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="devicon-gitlab-plain colored"></i>
                </a>
                <a href="mailto:danjkim831@gmail.com">
                    <i className="fa-solid fa-envelope text-[#1a3d5e] dark:text-neutral-300"></i>
                </a>
            </div>
        </section>
    )
}
