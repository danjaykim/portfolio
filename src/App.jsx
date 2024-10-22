import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Nav />
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
