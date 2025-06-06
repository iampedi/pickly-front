import { Header } from "./layout/Header";
import AppRoutes from "./router";

// src/App.tsx
export default function App() {
  return (
    <div className="continer max-w-4xl mx-auto px-4">
      <Header />
      <AppRoutes />
    </div>
  );
}
