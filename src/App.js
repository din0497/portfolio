import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About/About";
import Blog from "./pages/Blogs/Blog";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { BlogCartContainer } from "./pages/Home/style";

function App() {
  return (
    <main className="header">
      <Navbar/>
      <BlogCartContainer/>
      <div className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
      <Footer/>
    </main>
  );
}

export default App;

