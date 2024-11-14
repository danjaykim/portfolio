export default function About() {
    const techSkills = [
        {
            name: 'JavaScript',
            iconClass: 'devicon-javascript-plain',
            color: '#fcba03',
        },
        {
            name: 'Python',
            iconClass: 'devicon-python-plain',
            color: '#FFD23C',
        },
        {
            name: 'HTML5',
            iconClass: 'devicon-html5-plain',
            color: '#E14422',
        },
        {
            name: 'CSS3',
            iconClass: 'devicon-css3-plain',
            color: '#1567AD',
        },
        {
            name: 'React',
            iconClass: 'devicon-react-plain',
            color: '#56D5FA',
        },
        {
            name: 'FastAPI',
            iconClass: 'devicon-fastapi-plain',
            color: '#058D7F',
        },
        {
            name: 'Django',
            iconClass: 'devicon-django-plain',
            color: '#0D291D',
        },
        {
            name: 'PostgreSQL',
            iconClass: 'devicon-postgresql-plain',
            color: '#2D5C86',
        },
        {
            name: 'MongoDB',
            iconClass: 'devicon-mongodb-plain',
            color: '#46A039',
        },
        {
            name: 'Tailwind',
            iconClass: 'devicon-tailwindcss-plain',
            color: '#31B5F7',
        },
        {
            name: 'Bootstrap',
            iconClass: 'devicon-bootstrap-plain',
            color: '#6627F8',
        },
        {
            name: 'Docker',
            iconClass: 'devicon-docker-plain',
            color: '#0490BF',
        },
        {
            name: 'Git',
            iconClass: 'devicon-git-plain',
            color: '#F14625',
        },
    ]

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
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-8 font-open text-6xl text-neutral-600 dark:text-neutral-200 text-center">
                        {techSkills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className={`
                                    icon-container 
                                    py-3
                                    ${index === techSkills.length - 1 ? 'col-span-1 col-start-2 row-start-5 md:col-start-3 md:row-start-3' : ''}`}
                            >
                                <i
                                    className={`${skill.iconClass} hover:text-[${skill.color}]`}
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
