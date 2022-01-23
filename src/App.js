import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { BlogCartContainer } from "./pages/Home/style";
import Dropdown from "./components/Navbar/Dropdown";
import CreatePost from "./pages/Blogs/CreatePost";
import Post from "./pages/Blogs/Post";
import { useLayoutEffect } from "react";
import UserProfile from "./pages/ProfilePage/UserProfile";
import AuthPage from "./pages/Auth/AuthPage";

function App() {
  const [drop, setDrop] = useState("hidden");
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
          <Route path="/blog" element={<Blogs />} />
          <Route path="blog/create" element={<CreatePost />} />
          <Route path="blog/:id" element={<Post />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
