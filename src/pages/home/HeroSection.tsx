// src/pages/home/HeroSection.tsx
import image from "@/assets/images/hero-section-01.webp";
import { Logo } from "@/components/Logo";
import { SubmitButton } from "@/components/SubmitButton";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="bg-gradient-to-t from-lime-100 to-white md:fixed md:top-0 md:right-0 md:left-0 md:h-[560px]"
      style={{
        height: window.innerWidth < 768 ? `calc(${vh}px)` : undefined,
        maxHeight: window.innerWidth < 768 ? `calc(${vh}px)` : undefined,
      }}
    >
      <div className="continer mx-auto h-full max-w-5xl px-4">
        <div className="_wrapper flex h-full flex-col">
          <div className="_header flex items-center justify-between pt-4 md:pt-5">
            <Logo />
            <SubmitButton />
          </div>

          <div className="_content flex flex-1 flex-col content-around items-center justify-center gap-10 p-2 md:flex-row md:gap-10 md:px-0">
            <div className="md:w-2/3">
              <h2 className="mb-2 text-[26px] font-semibold md:mb-4 md:text-[40px] md:font-medium">
                Content worth your time.
              </h2>
              <p className="text-xl text-gray-600 md:text-2xl md:leading-9">
                In a world overwhelmed by noise, we’re building a space for
                clarity, connection, and care. Here, real people share real
                recommendations — not for attention, but for intention.
                <br />
                <span className="text-black underline">
                  No likes. No followers. Just curated content.
                </span>
              </p>
            </div>
            <div className="md:w-1/3">
              <img
                src={image}
                alt="Hero Section"
                className="max-h-[65vw] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
