import {NavLink, Outlet} from 'react-router-dom'
import { Suspense } from 'react'
import Load from '../Load/Load'
// import css from './Navigation.module.css'

export default function Navigation () {
    return (
        <header>
            <nav>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/movies">
                Movies
            </NavLink>
            <Suspense fallback={<Load/>}>
                <Outlet />
            </Suspense>
            </nav>
        </header>
    )
}