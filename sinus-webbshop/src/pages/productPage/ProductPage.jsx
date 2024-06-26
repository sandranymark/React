import axios from "axios"
import { useEffect, useState } from "react"
import '../../components/product/Product'
import Header from "../../components/header/Header";



const getProducts = (setProducts) => {
    // return axios.get("https://santosnr6.github.io/Data/sinus_products.json")
    //     .then(response => responses.data)
    //     .catch(error => {
    //         console.log("Error fetching products:", error);
    //         return [];
    //     });

    axios.get("https://santosnr6.github.io/Data/sinus_products.json")
        .then(response => {
            console.log(response.data)
            setProducts(response.data);
        })
        .catch(error => {
            console.log("Error fetching products:", error);
            return [];
        });
};


function ProductPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        //getProducts().then(data => setProducts(data))
        getProducts(setProducts);
    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])
    return (
        <>
            <Header />
            <div className="product-grid">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <article className='product__item' key={index}>
                            <div className='product__flex'>
                                <h2 className='product__title'>{product.title}</h2>
                                <img className='product__cart' src="src/assets/cart.jpg" alt="cart" />
                            </div>
                            <p className='product__shortDesc'>{product.shortDesc}</p>
                            <img className='product__image' src={product.cdnUrl} alt={product.title} />
                            <h3 className='product__price'>{product.price} <span className='product__sek'>SEK</span></h3>
                        </article>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </>
    );
}


export default ProductPage