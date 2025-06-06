// src/pages/HomePage.tsx
import ContentsPage from "./ContentsPage";
import HeroSection from "./HeroSection";

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />

      <div className="relative z-10 mt-[500px]">
        <ContentsPage />
      </div>
    </main>
  );
}
