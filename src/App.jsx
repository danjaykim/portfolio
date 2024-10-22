import { Outlet } from 'react-router-dom'
import './App.css'

export default function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
