// src/components/SubmitButton.tsx
import { Link } from "react-router-dom";
import { Button } from "./theme/button";
import { CirclePlusIcon } from "lucide-react";

export const SubmitButton = () => {
  return (
    <Button variant={"outline"} size={"lg"} asChild>
      <Link to="/submit">
        <CirclePlusIcon /> Submit
      </Link>
    </Button>
  );
};
