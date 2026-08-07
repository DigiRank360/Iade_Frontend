import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Trainers from "./pages/Trainers.jsx";
import Reviews from "./pages/Reviews.jsx";
import Gallery from "./pages/Gallery.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import OnlineClasses from "./pages/OnlineClasses.jsx";
import OfflineClasses from "./pages/OfflineClasses.jsx";
import Placement from "./pages/Placement.jsx";
import Contact from "./pages/Contact.jsx";
import Trainer from "./components/about/Trainer.jsx";






function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-ink min-h-screen">
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/classes/online" element={<OnlineClasses />} />
        <Route path="/classes/offline" element={<OfflineClasses />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trainer/:id" element={<Trainer />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
