import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div>
        <h1 className="text-3xl font-bold uppercase">Pickly</h1>
        <h2 className="text-gray-500">Content Worth Spreading</h2>
      </div>
      <Button>
        <PlusIcon /> Submit
      </Button>
    </div>
  );
};
