import { Header, Link } from "./Appbar.styled";

const navItems = [
    { href: '', text: 'Home' },
    { href: 'movies', text: 'Movies' },
];

export const Appbar = () => {
    return (
        <Header>
            <nav>
                {navItems.map(({ href, text }) =>
                <Link key={href} to={href}> 
                   {text}
               </Link>)}
            </nav>
        </Header>
    )
}