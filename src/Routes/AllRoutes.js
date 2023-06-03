import React from "react";
import { Route, Routes } from "react-router-dom";
import Token from "../Pages/Token";
import Pair from "../Pages/Pair";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Token />} />
      <Route path="/pairaddress" element={<Pair />} />
    </Routes>
  );
};
