import "./index.css";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Solution from "./pages/Solution";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Categories from "./pages/Categories";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Solution />
      <Service />
      <Projects />
      <Blog />
      <Categories />
      <Footer/>
    </div>
  );
}

export default App;
