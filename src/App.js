import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Community />
      <Blog />
      <Contact />
      <Routes>
        <Route path="#home" element={<Home />} />
        <Route path="#about" element={<About />} />
        <Route path="#experience" element={<Experience />} />
        <Route path="#projects" element={<Projects />} />
        <Route path="#community" element={<Community />} />
        <Route path="#blog" element={<Blog />} />
        <Route path="#contact" element={<Contact />} />
      </Routes>
      <Analytics />
    </div>
  );
};

export default App;
