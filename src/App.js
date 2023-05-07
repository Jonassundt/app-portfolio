import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Cinema from "./components/Cinema";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Here we define our pages */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />

          {/* For the HTML/CSS Wordguesser Project */}
          <Route path="/cinema" element={<Cinema />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
