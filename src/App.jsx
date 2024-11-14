import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

export default function App() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden')
        return () => document.body.classList.remove('overflow-hidden')
    }, [open])

    return (
        <div className="bg-light-bg dark:bg-dark-bg bg-fixed md:bg-cover bg-center min-h-screen">
            <header>
                <Nav open={open} setOpen={setOpen} />
            </header>
            <Outlet />
        </div>
    )
}
