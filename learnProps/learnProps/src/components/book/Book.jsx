/* eslint-disable react/prop-types */


function Book({ book, index }) {

    return (
        <article className="book" key={index}>
            <h2 className="book__title">{book.title}</h2>
            <h3 className="book__author">Av: {book.author}</h3>
            <p className="book__genre">Genre: {book.genre}</p>
            <p className="book__description">{book.desc}</p>
            <p className="book__pages">Pages: {book.pages}</p>

            <button className="book__buy-btn">Add to cart</button>

        </article>
    )
}


export default Book

