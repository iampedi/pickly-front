// src/App.tsx
import { Toaster } from "sonner";
import AppRoutes from "./router";

export default function App() {
  return (
    <>
      <AppRoutes />
      <Toaster richColors duration={3000} />
    </>
  );
}
