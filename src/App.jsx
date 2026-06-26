import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience3D from "./components/Experience3D";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Business from "./pages/Business";
import Career from "./pages/Career";
import Colleges from "./pages/Colleges";
import Contact from "./pages/Contact";
import Corporate from "./pages/Corporate";
import Courses from "./pages/Courses";
import Founders from "./pages/Founders";
import Insights from "./pages/Insights";
import Leadership from "./pages/Leadership";
import NotFound from "./pages/NotFound";
import Programmes from "./pages/Programmes";
import RoutePage from "./pages/RoutePage";
import Students from "./pages/Students";
import Tour from "./pages/Tour";
import WhyAI from "./pages/WhyAI";
import Workshops from "./pages/Workshops";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:topic" element={<About />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/programmes/:track" element={<Programmes />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:topic" element={<Students />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/:topic" element={<Career />} />
        <Route path="/business" element={<Business />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/corporate/:topic" element={<Corporate />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/colleges/:topic" element={<Colleges />} />
        <Route path="/why-ai" element={<WhyAI />} />
        <Route path="/why-ai/:industry" element={<WhyAI />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:type" element={<Insights />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/admissions/:topic" element={<Admissions />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workshops/:topic" element={<Workshops />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/privacy"
          element={
            <RoutePage
              eyebrow="Privacy"
              title="Privacy policy"
              summary="Elevox treats learner, partner, and visitor data with care. This page is prepared for the final policy copy."
              focus={["Data clarity", "Consent", "Security", "Learner trust"]}
            />
          }
        />
        <Route
          path="/terms"
          element={
            <RoutePage
              eyebrow="Terms"
              title="Terms of service"
              summary="The operating terms for programmes, workshops, admissions, and partner engagements will live here."
              focus={["Programmes", "Payments", "Partnerships", "Support"]}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Experience3D />
      <Footer />
    </>
  );
}

export default App;
