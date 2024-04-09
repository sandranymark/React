import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to="/products" className="navigation__link">Products</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/my-account" className="navigation__link">My Account</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;