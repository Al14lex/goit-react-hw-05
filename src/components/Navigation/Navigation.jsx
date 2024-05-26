import {NavLink, Outlet} from 'react-router-dom'
import { Suspense } from 'react'
import Load from '../Load/Load'
import css from './Navigation.module.css'

export default function Navigation () {
    return (
        <header className={css.container}>
            <nav className={css.navi}>
            <NavLink to="/" className={css.navLink}>
                Home
            </NavLink>
            <NavLink to="/movies" className={css.navLink}>
                Movies
            </NavLink>
            <Suspense fallback={<Load/>}>
                <Outlet />
            </Suspense>
            </nav>
        </header>
    )
}