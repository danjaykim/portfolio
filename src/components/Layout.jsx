import { useDarkMode } from '../hooks/useDarkMode'
import { Element } from 'react-scroll'
import HeroContent from './HeroContent'
import About from './About'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

export default function Layout() {
    const { darkMode } = useDarkMode()

    return (
        <>
            <HeroContent darkMode={darkMode} />
            <Element name="about">
                <About />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </>
    )
}
