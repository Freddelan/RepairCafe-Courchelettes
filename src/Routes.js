import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import homepage from "./pages/homepage";
import about from "./pages/apropos";

import RGPD from "./pages/RGPD";
import membres from "./pages/membres";
function LaRoute() {
  return (
    <div>
      <Router basename="/RepairCafe-Courchelettes">
        <Routes>
          <Route path="/" Component={homepage} />
          <Route path="/apropos" Component={about} />

          <Route path="/rgpd" Component={RGPD} />
          <Route path="/membres" Component={membres} />
        </Routes>
      </Router>
    </div>
  );
}

export default LaRoute;
