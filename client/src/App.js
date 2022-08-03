import "./App.css";
import Header from "./Components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Register from "./Components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { About } from "./Components/About/About";
import { Details } from "./Components/Details/Details";
import { Getdata } from "./Components/Getdata/Getdata";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>

        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/about-us" element={<About />} />
        </Routes>

        <Routes>
          <Route path="/post-movie" element={<Details />} />
        </Routes>

        <Routes>
          <Route path="/movie-data" element={<Getdata />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
