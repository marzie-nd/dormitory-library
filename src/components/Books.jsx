import {
  NavLink,
  useLocation,
  useSearchParams,
  Outlet,
} from "react-router-dom";

import { getBooks } from "../data/data";
import "./Books.css";

const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const books = getBooks();

  return (
    <div className="books">
      <nav className="book-item">
        <input
          className="search-box"
          type="text"
          value={searchParams.get("filter") || ""}
          placeholder="جستجوی کتاب"
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <button className="add-btn">اضافه کردن کتاب</button>
        {books
          .filter((book) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = book.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((book) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  borderRadius: "30px",
                  backgroundColor: isActive ? "#e69681" : "",
                };
              }}
              to={`/books/${book.id}${location.search}`}
              key={book.id}
            >
              {book.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Books;
