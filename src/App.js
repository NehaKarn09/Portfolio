import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
        <Routes>
          <Route exact path="/projects" element={ <Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
