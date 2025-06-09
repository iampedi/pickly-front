// src/router/index.tsx
import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/home/Index";
import CreateContentPage from "@/pages/contents/Create";
import UpdateContentPage from "@/pages/contents/Update";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/create" element={<CreateContentPage />} />
    <Route path="/update/:id" element={<UpdateContentPage />} />
  </Routes>
);

export default AppRoutes;
