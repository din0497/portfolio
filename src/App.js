import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Blog from "./pages/Blogs/Blog";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="header">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

