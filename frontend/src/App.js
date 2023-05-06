import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import IndexPage from "./components/IndexPage";
import Footer from "./components/Footer";

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
      <Footer/> 
    </div>
  );
};

export default App;
