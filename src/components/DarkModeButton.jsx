import { useDarkMode } from '../hooks/useDarkMode'

export default function DarkModeButton() {
    const { darkMode, toggleDarkMode } = useDarkMode()

    return (
        <button
            onClick={toggleDarkMode}
            className="z-50 flex items-center w-16 h-8 rounded-full bg-neutral-800/20 dark:bg-neutral-200/20 pl-[.3rem]"
        >
            <span
                className={`w-6 h-6 transition-all duration-300 ${darkMode ? 'translate-x-8' : ''}`}
            >
                {darkMode ? (
                    <box-icon
                        name="moon"
                        type="solid"
                        color="#ffffff"
                    ></box-icon>
                ) : (
                    <box-icon
                        name="sun"
                        type="solid"
                        color="#ffffff"
                    ></box-icon>
                )}
            </span>
        </button>
    )
}
