// src/pages/HomePage.tsx
import ContentsPage from "./ContentsPage";
import HeroSection from "./HeroSection";

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />

      <div className="relative z-10 md:mt-[560px]">
        <ContentsPage />
      </div>
    </main>
  );
}
