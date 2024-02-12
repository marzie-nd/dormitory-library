import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";
import "./Book.css";

const Book = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const book = getBook(parseInt(params.bookId));

  if (book) {
    return (
      <main className="book">
        <div className="card">
          <div className="card-header">
            <h2>{book.name}</h2>
          </div>
          <div className="card-body">
            <p>نویسنده: {book.author}</p>
            <p>مترجم: {book.translator}</p>
            <p>{book.publisher}</p>
          </div>
          <div className="card-footer">
            <button
            className="delete-btn"
              onClick={() => {
                deleteBook(book.id);
                navigate("/books" + location.search);
              }}
            >
              حذف کتاب
            </button>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="book">
        <h2>همچین کتابی پیدا نشد.</h2>
      </main>
    );
  }
};

export default Book;
