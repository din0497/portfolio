import { useState, useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
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
import AuthPage from "./pages/Auth/AuthPage";
import AuthContext from "./store/auth-contex";
import LogIn from "./commons/auth/LogIn";

function App() {
  const authCtx = useContext(AuthContext);
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
          <Route path="blog/:id" element={<Post />} />
          <Route path="/contact" element={<LogIn/>}/>
          <Route
            path="blog/create" 
            element={authCtx.isLoggedIn ? <CreatePost /> : <AuthPage />}
          />

          {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
