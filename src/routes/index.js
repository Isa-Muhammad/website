import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home/index";
// import About from "../components/home/About";

const Router = () => {
  const allRoutes = (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
  return allRoutes;
};

export default Router;
