
import Header from '../../components/header/Header'
import ProductItem from '../../components/productItem/ProductItem'
import './landingPage.css'



function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <img className='Hero__img' src="src/assets/poster.png" alt="Bild på skateboard" />
                <div className='product-grid'>
                    <ProductItem />
                </div>
            </main>
        </>
    )
}

export default LandingPage
