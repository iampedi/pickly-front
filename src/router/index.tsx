// src/router/index.tsx
import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/HomePage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default AppRoutes;
