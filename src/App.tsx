import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./sections/NavBar";
import JoinUsPage from "./pages/JoinUsPage";
import AppLoader from "./components/AppLoader";
function App() {
  const [isMinDelayDone, setIsMinDelayDone] = useState(false);
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const delayId = window.setTimeout(() => setIsMinDelayDone(true), 500);
    if (document.readyState === "complete") {
      setIsDomLoaded(true);
    }
    const onLoad = () => setIsDomLoaded(true);
    window.addEventListener("load", onLoad);
    // Safety: ensure we don't get stuck if 'load' never fires
    const safetyId = window.setTimeout(() => setIsDomLoaded(true), 3000);
    return () => {
      window.clearTimeout(delayId);
      window.clearTimeout(safetyId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  const isAppLoading = !(isDomLoaded && isMinDelayDone);

  return (
    <BrowserRouter>
      {isAppLoading && <AppLoader />}
      <NavBar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
