import { Link, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>کتابخانه خوابگاه های دانشگاه صنعتی امیرکبیر</h1>
      </header>
      <nav>
        <Link className="" to="/books">
          نمایش کتاب ها
        </Link>
        <Link to="/about">اطلاعات خوابگاه</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
