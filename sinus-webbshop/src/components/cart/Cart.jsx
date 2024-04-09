import { Link } from 'react-router-dom';
function Cart() {


    return (
        <nav className="cart-navigation">
            <Link to="/CheckoutPage">
                <img className="cart__image" src="src/assets/cart.svg" alt="cart" />
            </Link>
        </nav>
    )
}

export default Cart