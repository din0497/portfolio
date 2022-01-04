import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Blog/>
    </div>
  );
}

export default App;
