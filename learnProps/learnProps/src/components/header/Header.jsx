import Cart from '../cart/Cart'
import Logo from '../../assets/sherlock.png'

function Header() {
    return (

        <header className="header">
            <img src={Logo} alt="Sherlock Holmes" className="header__logo" />
            <Cart />

        </header >

    )
}

export default Header
