// src/pages/HomePage.tsx
import { Footer } from "@/components/Footer";
import ContentsPage from "./ContentsPage";
import HeroSection from "./HeroSection";

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />

      <div className="relative z-10 md:mt-[560px]">
        <ContentsPage />
      </div>

      <Footer />
    </main>
  );
}
