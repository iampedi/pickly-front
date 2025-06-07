// src/pages/home/HeroSection.tsx
import image from "@/assets/images/hero-section-01.webp";
import { Logo } from "@/components/Logo";
import { SubmitButton } from "@/components/SubmitButton";

export default function HeroSection() {
  return (
    <div className="fixed top-0 right-0 left-0 h-[560px] bg-gradient-to-t from-lime-100 to-white">
      <div className="continer mx-auto h-full max-w-5xl px-4">
        <div className="_wrapper flex h-full flex-col">
          <div className="_header flex items-center justify-between pt-5">
            <Logo />
            <SubmitButton />
          </div>

          <div className="_content flex flex-1 items-center gap-10 pb-4">
            <div className="w-2/3">
              <h2 className="mb-4 text-[40px] font-medium">
                Content worth your time.
              </h2>
              <p className="text-2xl leading-9 text-gray-600">
                In a world overwhelmed by noise, we’re building a space for
                clarity, connection, and care. Here, real people share real
                recommendations — not for attention, but for intention.
                <br />
                <span className="text-black underline">
                  No likes. No followers. Just curated content.
                </span>
              </p>
            </div>
            <div className="w-1/3">
              <img src={image} alt="Hero Section" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
