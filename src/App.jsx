import PurpleNav from "./components/PurpleNav";
import { BrowserRouter, Routes, Route, useLocation } from "react-router"; 
import { ReactLenis, useLenis } from "lenis/react"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis(); 

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); 
    }
  }, [pathname, lenis]);

  return null;
}


function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="bg-zinc-950 w-full px-3 py-2">
      <CustomCursor />
      <Loader loading={loading} setLoading={setLoading} />
      <BrowserRouter>
        <PurpleNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <ReactLenis root options={{ duration: 0.8, smooth: true }}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home activeTab={activeTab} setActiveTab={setActiveTab} loading={loading} />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
        </ReactLenis>
      </BrowserRouter>
    </div>
  );
}

export default App;