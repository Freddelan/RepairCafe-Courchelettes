// LaRoute.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/apropos";
import RGPD from "./pages/RGPD";
import Membres from "./pages/membres";

function LaRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/RepairCafe-Courchelettes" element={<Homepage />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/rgpd" element={<RGPD />} />
        <Route path="/membres" element={<Membres />} />
      </Routes>
    </Router>
  );
}

export default LaRoute;
