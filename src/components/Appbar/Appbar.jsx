import { Link } from "react-router-dom"


const navItems = [
    { href: 'home', text: 'Home' },
    { href: 'movies', text: 'Movies' },
];

export const Appbar = () => {
    return (
        <header>
            <nav>
                {navItems.map(({ href, text }) => <Link key={href} to={href}>
                   {text}
               </Link>)}
            </nav>
        </header>
    )
}