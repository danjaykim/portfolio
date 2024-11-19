export default function About() {
    const techSkills = [
        {
            name: 'JavaScript',
            iconClass: 'devicon-javascript-plain',
            hoverColor: 'hover:text-[#fcba03]',
        },
        {
            name: 'Python',
            iconClass: 'devicon-python-plain',
            hoverColor: 'hover:text-[#FFD23C]',
        },
        {
            name: 'HTML5',
            iconClass: 'devicon-html5-plain',
            hoverColor: 'hover:text-[#E14422]',
        },
        {
            name: 'CSS3',
            iconClass: 'devicon-css3-plain',
            hoverColor: 'hover:text-[#1567AD]',
        },
        {
            name: 'React',
            iconClass: 'devicon-react-plain',
            hoverColor: 'hover:text-[#56D5FA]',
        },
        {
            name: 'FastAPI',
            iconClass: 'devicon-fastapi-plain',
            hoverColor: 'hover:text-[#058D7F]',
        },
        {
            name: 'Django',
            iconClass: 'devicon-django-plain',
            hoverColor: 'hover:text-[#0D291D]',
        },
        {
            name: 'PostgreSQL',
            iconClass: 'devicon-postgresql-plain',
            hoverColor: 'hover:text-[#2D5C86]',
        },
        {
            name: 'MongoDB',
            iconClass: 'devicon-mongodb-plain',
            hoverColor: 'hover:text-[#46A039]',
        },
        {
            name: 'Tailwind',
            iconClass: 'devicon-tailwindcss-plain',
            hoverColor: 'hover:text-[#31B5F7]',
        },
        {
            name: 'Bootstrap',
            iconClass: 'devicon-bootstrap-plain',
            hoverColor: 'hover:text-[#6627F8]',
        },
        {
            name: 'Docker',
            iconClass: 'devicon-docker-plain',
            hoverColor: 'hover:text-[#0490BF]',
        },
        {
            name: 'Git',
            iconClass: 'devicon-git-plain',
            hoverColor: 'hover:text-[#F14625]',
        },
    ]

    return (
        <section className="bg-neutral-200/50 dark:bg-neutral-900/70 py-12 md:py-20">
            <h2
                className="hidden md:block font-inter
                text-neutral-700 text-4xl text-center dark:text-neutral-200 mb-14 md:mb-20"
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
                        <p className="mb-5">
                            As a software engineer, I love bringing ideas to
                            life. Combining my technical knowledge with a keen
                            eye for design, I aim to create products and
                            services that are not only efficient and scalable
                            behind the scenes, but also engaging and visually
                            appealing. My attention to detail and dedication to
                            perfection ensure that every application is met with
                            the highest standard.
                        </p>
                        <p className="mb-5">
                            My experience as a former Operations Director in the
                            automobile parts industry has equipped me to excel
                            in high-pressure, fast-paced environments. Working
                            collaboratively across teams, I ensure alignment
                            with strategic goals to drive results.
                        </p>
                        <p>
                            I consider myself a lifelong learner dedicated to
                            consistently honing my skills to create impactful
                            software solutions that drive business success. I
                            love working on applications that challenge my
                            technical abilities and provide opportunities to
                            collaborate with like-minded professionals.
                        </p>
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
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-8 font-open text-6xl text-[#556B2F] dark:text-neutral-200 text-center blur-[.4px]">
                        {techSkills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className={`
                                    icon-container 
                                    py-3
                                    ${index === techSkills.length - 1 ? 'col-span-1 col-start-2 row-start-5 md:col-start-3 md:row-start-3' : ''}`}
                            >
                                <i
                                    className={`${skill.iconClass} ${skill.hoverColor}`}
                                ></i>
                                <p className="text-[.8rem] pt-1">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
