import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home/index";

const Router = () => {
  const allRoutes = (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
  return allRoutes;
};

export default Router;
