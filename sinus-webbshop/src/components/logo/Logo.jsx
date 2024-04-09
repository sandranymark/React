import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img src="src/assets/sinus-logo.svg" alt="logotype" />
            </Link>
        </div>
    )
}

export default Logo
