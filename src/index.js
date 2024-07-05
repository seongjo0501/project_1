import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Meta from './Meta'
import GlobalStyles from './GlobalStyles'
import { UserProvider } from './common/header/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <UserProvider>
        <BrowserRouter>
            <>
                <Meta />
                <GlobalStyles />
                <App />
            </>
        </BrowserRouter>
    </UserProvider>
)
