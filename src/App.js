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
import img from "./assets/img.jpg";
import img1 from "./assets/img1.jpg";
import Post from "./pages/Blogs/Post";

function App() {
  const [drop, setDrop] = useState("hidden");
  const [blogs, setBlog] = useState([
    {
      id: "b1",
      img: img1,
      title:
        "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
      text: [
        "Have you wondered how sites like dev.to create dynamic and engaging social sharing banners on Twitter, LinkedIn and Facebook?",
        "I revamped my blogfolio this year and knew I didn't want to continue to create banner images for my articles, and manually create Open Graph images for my social outlets.",
        " I'm extremely happy with the result - now when I share my articles online, my Open Graph images look something like this:",
      ],
      date: "January 5, 2021",
    },
    {
      id: "b2",
      img: img1,
      title:
        "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
      text: [
        "Have you wondered how sites like dev.to create dynamic and engaging social sharing banners on Twitter, LinkedIn and Facebook?",
        "I revamped my blogfolio this year and knew I didn't want to continue to create banner images for my articles, and manually create Open Graph images for my social outlets.",
        " I'm extremely happy with the result - now when I share my articles online, my Open Graph images look something like this:",
        "jerhsdfghjerkjsdghjkehgfjkhdsgfjhsjfdhgj fhsdjkghjsgdfhjdg sfsjjdhjdsjjehgj asjsdfsjjghlkhhjgfhjhv asdfhsghejrdgsh ljfgldshglhgl ldsfglgldjgljjgfdl"
      ],
      date: "January 5, 2021",
    },
    {
      id: "b3",
      img: img1,
      title:
        "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
      text: [
        "Have you wondered how sites like dev.to create dynamic and engaging social sharing banners on Twitter, LinkedIn and Facebook?",
        "I revamped my blogfolio this year and knew I didn't want to continue to create banner images for my articles, and manually create Open Graph images for my social outlets.",
        " I'm extremely happy with the result - now when I share my articles online, my Open Graph images look something like this:",
      ],
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
            path="blog/create"
            element={<CreatePost setBlog={setBlog} />}
          />
          <Route path="blog/:id" element={<Post blogs={blogs} />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
