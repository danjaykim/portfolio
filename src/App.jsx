import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

export default function App() {
    return (
        <div className="App dark:bg-slate-800 min-h-screen">
            <header className="pt-4">
                <Nav />
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
