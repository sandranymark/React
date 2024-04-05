import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import './header.css'
import Navigation from "../navigation/Navigation";

function Header() {
    return (
        <header className="header">
            <Logo />
            <Navigation />
            <Cart />

        </header >
    )
}

export default Header
