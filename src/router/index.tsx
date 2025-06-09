// src/router/index.tsx
import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/home/Index";
import SubmitPage from "@/pages/submit/Index";
import { TestPage } from "@/pages/test/Index";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/submit" element={<SubmitPage />} />
    <Route path="/test" element={<TestPage />} />
  </Routes>
);

export default AppRoutes;
