import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Courses from "./pages/Courses";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;