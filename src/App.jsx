import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

export default function App() {
    return (
        <div className="dark:bg-[#162028] min-h-screen pt-4">
            <header>
                <Nav />
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
