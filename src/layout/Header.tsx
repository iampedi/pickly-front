// src/layout/Header.tsx
import { Button } from "@/components/theme/button";
import { CirclePlusIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="pt-4 pb-3 fixed top-0 left-0 right-0 z-10">
      <div className="continer mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <h1 className="bg-lime-200 text-3xl font-bold uppercase">
              Pickly ::
            </h1>
          </div>
          <Button variant={"outline"} size={"lg"}>
            <CirclePlusIcon /> Submit
          </Button>
        </div>
      </div>
    </header>
  );
};
