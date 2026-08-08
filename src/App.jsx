import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
// import Trainers from "./pages/Trainers.jsx";
import Reviews from "./pages/Reviews.jsx";
import Gallery from "./pages/Gallery.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import OnlineClasses from "./pages/OnlineClasses.jsx";
import OfflineClasses from "./pages/OfflineClasses.jsx";
import Placement from "./pages/Placement.jsx";
import Contact from "./pages/Contact.jsx";
import Trainer from "./components/about/Trainer.jsx";
import Review from "./components/about/Review.jsx";
import Gallerys from "./components/about/Gallery.jsx";
import DigitalMMC from "./components/course/DigitalMMC.jsx";
import Seo from "./components/course/Seo.jsx";
import GoogleAds from "./components/course/GoogleAd.jsx";
import SocialMM from "./components/course/SocialMM.jsx";
import FullStackDev from "./components/course/FullStackDev.jsx";
import Wordpress from "./components/course/Wordpress.jsx";
import GraphicsDesigning from "./components/course/GraphicDesign.jsx";
import VideoEditing from "./components/course/VideoEditing.jsx";
import LaptopRepairing from "./components/course/LaptopRepairing.jsx";
import OnlineClass from "./components/classes/OnlineClass.jsx";
import OfflineClass from "./components/classes/OfflineClass.jsx";
import DigitalMA from "./components/placement/DigitalMA.jsx";
import Hire from "./components/placement/Hire.jsx";

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
        {/* <Route path="/trainers" element={<Trainers />} /> */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/classes/online" element={<OnlineClasses />} />
        <Route path="/classes/offline" element={<OfflineClasses />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/review" element={<Review />} />
        <Route path="/gallerys" element={<Gallerys />} />
        <Route path="/digitalmmc" element={<DigitalMMC />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/google-ads" element={<GoogleAds />} />
        <Route path="/social-media" element={<SocialMM />} />
        <Route path="/fullstack-dev" element={<FullStackDev />} />
        <Route path="/wordpress" element={<Wordpress />} />
        <Route path="/graphics-designing" element={<GraphicsDesigning />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/laptop-repairing" element={<LaptopRepairing />} />
        <Route path="/online-class" element={<OnlineClass />} />
        <Route path="/offline-class" element={<OfflineClass />} />
        <Route path="/digital-ma" element={<DigitalMA />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
