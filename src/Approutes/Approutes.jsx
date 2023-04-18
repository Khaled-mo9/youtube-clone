import React, { useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Watch from "../Pages/Watch";
import Playlist from "../Pages/Playlist";
import About from "../Components/About";

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
const Approutes = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/watch/:id" element={<Watch />} />
        <Route path="/watch/:id" element={<Watch />} />
        {/* <Route path="/:id/about" element={<About />} /> */}
      </Routes>
    </>
  );
};

export default Approutes;
