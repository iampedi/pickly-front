// src/pages/home/HeroSection.tsx
import { Header } from "@/layout/Header";

export default function HeroSection() {
  return (
    <div className="fixed top-0 right-0 left-0 z-0 h-[500px] bg-gradient-to-t from-lime-100 to-white">
      <Header />

      <div className="continer mx-auto h-full max-w-4xl">
        <div className="flex h-full items-center justify-center">
          <div>
            <h2 className="mb-4 text-[40px] font-medium">
              Content worth your time.
            </h2>
            <p className="text-2xl leading-9 text-gray-600">
              In a world overwhelmed by noise, we’re building a space for
              clarity, connection, and care. Here, real people share real
              recommendations — not for attention, but for intention.{" "}
              <span className="text-black underline">
                No likes. No followers. Just curated content.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
