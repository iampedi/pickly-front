// src/components/SubmitButton.tsx
import { Link } from "react-router-dom";
import { Button } from "./theme/Button";
import { CirclePlusIcon } from "lucide-react";

type SubmitButtonProps = {
  className?: string;
};

export const SubmitButton = ({ className }: SubmitButtonProps) => {
  return (
    <Button className={className} variant={"outline"} size={"lg"} asChild>
      <Link to="/submit">
        <CirclePlusIcon /> Submit
      </Link>
    </Button>
  );
};
