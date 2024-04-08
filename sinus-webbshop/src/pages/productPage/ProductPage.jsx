import axios from "axios"
import { useEffect, useState } from "react"






const getProducts = () => {
    return axios.get("https://santosnr6.github.io/Data/sinus_products.json")
        .then(response => response.data)
        .catch(error => {
            console.log("Error fetching products:", error);
            return [];
        });
};


function ProductPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts(setProducts)
    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])
    return (

        <>
            {products.map((product, index) =>
                <article className='product__item' key={index}>
                    <div className='product__flex'>
                        <h2 className='product__title'>{product.title}</h2>
                        <img className='product__cart' src="src/assets/cart.jpg" alt="cart" />
                    </div>
                    <p className='product__shortDesc'>{product.shortDesc}</p>
                    <img className='product__image' src={product.cdnUrl} alt={product.title} />
                    <h3 className='product__price'>{product.price} <span className='product__sek'>SEK</span></h3>
                </article>
            )}
        </>
    )
}



export default ProductPage

