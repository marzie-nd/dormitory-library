import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import About from "./components/About";
import Books from "./components/Books";
import Book from "./components/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />}>
            <Route
              index
              element={
                <main className="container" style={{ padding: "1rem" }}>
                  <p>کتاب مورد نظر خود را در لیست جستجو کنید.</p>
                </main>
              }
            />
            <Route path=":bookId" element={<Book />} />
          </Route>
          <Route
            path="*"
            element={
              <main className="container" style={{ padding: "1rem" }}>
                <p>کتاب مورد نظر یافت نشد.</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
