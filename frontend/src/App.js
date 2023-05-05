import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import IndexPage from "./components/IndexPage";

const App = () => {
  return (
    <div className="App ">
      <header>
        <Link to="/" className="logo">
          <div style={{  margin: "0", alignItems: "center" }}>
            <h1>To Do List</h1>
          </div>
        </Link>
        <nav>
          <Link to="/about" className="about-link">
            About
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <div
          className="footer-div text-center p-3"
          style={{

          }}
        >
          © 2023 Copyright :
          <a
            className="text-white"
            href="https://www.advaittumbre.xyz"
            target={"_blank"}
            rel="noreferrer"
            style={{
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Advait Tumbre
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
