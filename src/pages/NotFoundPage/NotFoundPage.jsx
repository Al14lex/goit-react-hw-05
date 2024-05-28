import { Link, } from "react-router-dom"
import css from './NotFoundPage.module.css'

export default function NotFoundPage() {

    return (
        <main className={css.notFaund}>
        <Link to="/" className={css.goBack}>Go back to Home</Link>
        <b>404</b>
        <p>Sorry, we could not find that page</p>
        </main>
    );
}