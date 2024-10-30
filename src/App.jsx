import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

export default function App() {
    return (
        <div className="bg-light-bg dark:bg-dark-bg min-h-screen pt-4">
            <header>
                <Nav />
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
