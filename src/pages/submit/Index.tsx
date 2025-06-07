// src/pages/submit/Index.tsx
import { Link } from "react-router-dom";
// UI Imports
import image from "@/assets/images/submit-01.webp";
import { Button } from "@/components/theme/button";
import { ArrowLeftIcon } from "lucide-react";
import ContentForm from "./Form";

export default function SubmitPage() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="flex w-1/2 flex-col items-center justify-center gap-5 bg-gradient-to-r from-lime-100 to-white">
        <img src={image} alt="Submit Page" className="w-80" />
        <h1 className="text-3xl font-medium text-yellow-900">
          Submit Your Content
        </h1>
      </div>

      <div className="scrollbar-thin scrollbar-thumb-lime-400 scrollbar-track-lime-100 flex w-1/2 flex-col justify-between overflow-y-scroll p-8">
        <ContentForm />

        <div className="text-center">
          <Button
            variant={"link"}
            className="h-0 bg-red-100 !p-0 font-normal text-gray-500 hover:text-black"
            asChild
          >
            <Link to="/">
              <ArrowLeftIcon /> Back
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
