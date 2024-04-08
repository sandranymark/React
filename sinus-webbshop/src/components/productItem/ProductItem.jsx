import '../product/product.css'
import '../../assets/data'
import products from '../../assets/data'

function ProductItem() {
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
    );
}

export default ProductItem




// HÄMTAR UT HOODIES FRÅN SCRIPT FILEN ASSETS/DATA

// function ProductItem() {


//     const hoodies = products.filter(product => product.category === "hoodie").slice(0, 4);

//     return (
//         <>
//             {hoodies.map((product, index) =>
//                 <article className='product__item' key={index}>
//                     <div className='product__flex'>
//                         <h2 className='product__title'>{product.title}</h2>
//                         <img className='product__cart' src="src/assets/cart.jpg" alt="cart" />
//                     </div>
//                     <p className='product__shortDesc'>{product.shortDesc}</p>
//                     <img className='product__image' src={product.cdnUrl} alt={product.title} />
//                     <h3 className='product__price'>{product.price} <span className='product__sek'>SEK</span></h3>
//                 </article>
//             )}


//         </>
//     )
// }