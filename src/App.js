import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useParams } from "react-router-dom";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { BlogCartContainer } from "./pages/Home/style";
import Dropdown from "./components/Navbar/Dropdown";
import CreatePost from "./pages/Blogs/CreatePost";
import img from "./assets/img.jpg";
import Blog from './pages/Blogs/Blog'

function App() {
  const [drop, setDrop] = useState("hidden");
  const [blogs, setBlog] = useState([
    {
      img: img,
      title:
        "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
      date: "January 5, 2021",
    },
    {
      img: img,
      title:
        "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
      date: "January 5, 2021",
    },
    {
      img: img,
      title:
        "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
      date: "January 5, 2021",
    },
    {
      img: img,
      title:
        "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
      date: "January 5, 2021",
    },
    {
      img: img,
      title:
        "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
      date: "January 5, 2021",
    },
  ]);
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
          <Route path="/blog" element={<Blogs blogs={blogs} />} />
          <Route
            path="blog/:create"
            element={<CreatePost setBlog={setBlog} />}
          />
          <Route path="blog/l" element={<Blog
                img={blogs[0].img}
                title={blogs[0].title}
                date={blogs[0].date}
              />}/>
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
