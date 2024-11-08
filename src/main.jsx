import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DarkModeProvider from './components/DarkModeProvider.jsx'
import App from './App.jsx'
import './index.css'
import './fonts/fonts.css'
import LandingPage from './components/LandingPage.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
])

const rootElement = document.getElementById('root')
if (!rootElement) {
    throw new Error('root element was not found')
}

console.table(import.meta.env)

const root = ReactDOM.createRoot(rootElement)
root.render(
    <React.StrictMode>
        <DarkModeProvider>
            <RouterProvider router={router} />
        </DarkModeProvider>
    </React.StrictMode>
)
