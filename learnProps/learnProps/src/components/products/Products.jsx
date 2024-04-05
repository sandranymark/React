import Book from '../book/Book';
import books from '../../assets/books.json';

function Products() {
    return (
        <main className="main">
            {
                books.map((book, index) =>
                    <Book
                        book={book}
                        key={index}
                    />
                )}

        </main>

    )
}

export default Products
