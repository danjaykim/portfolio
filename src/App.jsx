import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

export default function App() {
    return (
        <div className="bg-light-bg dark:bg-dark-bg bg-fixed min-h-screen">
            <header>
                <Nav />
            </header>
            <Outlet />
        </div>
    )
}
