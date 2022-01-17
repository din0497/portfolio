import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { BlogCartContainer } from "./pages/Home/style";
import Dropdown from "./components/Navbar/Dropdown";
import CreatePost from './pages/Blogs/CreatePost'
import Post from "./pages/Blogs/Post";

function App() {
  const [drop, setDrop] = useState("hidden");

  return (
    <main className="header">
      <Navbar drop={drop} setDrop={setDrop} />
      {drop === "visible" && <Dropdown setDrop={setDrop} />}
      <BlogCartContainer />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blogs/>} />
          <Route
            path="blog/create"
            element={<CreatePost />}
          />
          <Route path="blog/:id" element={<Post/>} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
