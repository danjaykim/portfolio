import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
    const [aboutRef, aboutInView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })
    const [skillsRef, skillsInView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })

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
        <section className="bg-white/50 dark:bg-[#1C2625]/60 py-12 md:py-20">
            <h2
                className="hidden md:block font-inter
                text-[#1a3d5e] text-base text-center dark:text-neutral-200 font-medium tracking-widest blur-[.5px] underline underline-offset-8 decoration-1 md:mb-20"
            >
                ABOUT ME
            </h2>
            <div className="container relative flex flex-col md:flex-row md:justify-between md:gap-14">
                <motion.div
                    ref={aboutRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={aboutInView && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeIn' }}
                    className="about-content mb-12 md:mb-0 md:w-[50%]"
                >
                    <h2 className="md:hidden font-inter font-medium text-[#1a3d5e] text-[1rem] text-center tracking-widest dark:text-neutral-200 blur-[.5px] underline underline-offset-8 mb-10">
                        ABOUT ME
                    </h2>
                    <h2 className="hidden md:block font-inter text-[#1a3d5e] text-sm text-center tracking-wider dark:text-neutral-200 mb-8">
                        BACKGROUND
                    </h2>
                    <div className="font-open text-[.95rem] text-[#1a3d5e] dark:text-stone-300 font-light tracking-wide leading-relaxed">
                        <p className="mb-4 md:mb-8">
                            As a software engineer, I absolutely love bringing
                            ideas to life. Combining my technical knowledge with
                            a keen eye for design, I aim to create products and
                            services that are not only efficient and scalable
                            behind the scenes but also engaging and visually
                            appealing. My attention to detail and dedication to
                            perfection ensure that every application is designed
                            and developed at the highest standard.
                        </p>
                        <p className="mb-4 md:mb-8">
                            My prior experience as a former Operations Director
                            in the automobile parts industry has equipped me to
                            excel in high-pressure, fast-paced environments.
                            With specialization in cross-team management and
                            collaboration, I ensure alignment with strategic
                            goals to deliver results.
                        </p>
                        <p>
                            I consider myself a lifelong learner, committed to
                            continuous growth and improvement. My focus is on
                            developing software solutions that drive business
                            success, and I'm always looking to work with
                            like-minded people who share my passion for creating
                            innovative products and services.
                        </p>
                    </div>
                </motion.div>
                <div className="hidden md:block border-r border-neutral-400 dark:border-neutral-400 h-full left-1/2 top-1/2 -translate-y-1/2 absolute"></div>
                <motion.div
                    ref={skillsRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={skillsInView && { opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeIn',
                        delay: aboutInView && skillsInView ? 0.1 : 0,
                    }}
                    className="skills-content md:w-[50%]"
                >
                    <h2 className="md:hidden font-inter font-medium text-[#1a3d5e] text-[1rem] tracking-widest text-center dark:text-neutral-200 blur-[.5px] underline underline-offset-8 mb-10">
                        SKILLS
                    </h2>
                    <h2 className="hidden md:block font-inter text-[#1a3d5e] text-sm text-center tracking-wider dark:text-neutral-200 mb-8">
                        TECH SKILLS
                    </h2>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-8 font-open text-6xl text-[#1a3d5e] dark:text-neutral-200 text-center blur-[.4px]">
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
                </motion.div>
            </div>
        </section>
    )
}
